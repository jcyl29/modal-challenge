const fallbackCopyTextToClipboard = text => {
  var textArea = document.createElement('textarea');
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    if (!successful) {
      throw new Error('copy via document.execCommand not successful');
    }
  } catch (err) {
    throw new Error(`error attempting document.execCommand, error=${err}`);
  }

  document.body.removeChild(textArea);

  // make this return promise to match return type of Clipboard API
  return Promise.resolve();
};

const copyTextToClipboard = text => {
  if (!navigator.clipboard) {
    return fallbackCopyTextToClipboard(text);
  }
  return navigator.clipboard.writeText(text);
};

export default copyTextToClipboard;
