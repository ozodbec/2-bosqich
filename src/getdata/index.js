export function getFormData(form) {
    const data = new FormData(form);
    const obj = {};
    for (const [key, value] of data.entries()) {
      obj[key] = value;
    }
    return obj;
  }
  