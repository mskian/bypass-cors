document.addEventListener('DOMContentLoaded', () => {
    const proxyToggle = document.getElementById('proxyToggle');
    const urlInput = document.getElementById('urlInput');
    const submitButton = document.getElementById('submitButton');
    const outputDiv = document.getElementById('output');
  
    const proxyEnabled = localStorage.getItem('proxyEnabled') === 'true';
    proxyToggle.checked = proxyEnabled;
  
    proxyToggle.addEventListener('change', () => {
      localStorage.setItem('proxyEnabled', proxyToggle.checked);
    });
  
    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    };
  
    const showLoading = () => {
      outputDiv.innerHTML = '<p class="notification is-success">Loading data, please wait...</p>';
    };
  
    const clearLoading = () => {
      outputDiv.innerHTML = '';
    };
  
    submitButton.addEventListener('click', async () => {
      const url = urlInput.value.trim();
      clearLoading();
  
      if (!isValidUrl(url)) {
        outputDiv.innerHTML = '<p class="notification is-danger">Please enter a valid URL.</p>';
        return;
      }
  
      const apiUrl = proxyToggle.checked
        ? `/api/bypass?url=${encodeURIComponent(url)}`
        : url;
  
      try {
        showLoading();
  
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
  
        const data = await response.json();
        outputDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      } catch (error) {
        clearLoading();
        outputDiv.innerHTML = `<p class="notification is-danger">Error: ${error.message}</p>`;
      }
    });
  });
