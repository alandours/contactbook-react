export const formatFullName = (name, lastname, lastnameFirst, comma) => {
  if (!lastname) return name;
  const fullName = lastnameFirst ? [lastname, name] : [name, lastname];
  const joinStr = comma ? ', ' : ' ';
  return fullName.join(joinStr);
};

export const isArrayNotEmpty = (arr) => !!(arr instanceof Array && arr.length);

export const isObjectNotEmpty = (obj) => !obj || !!(obj.constructor === Object && Object.keys(obj).length);

export const sanitizeString = (str, rp) => {
  const wsReplace = typeof rp === 'string' ? rp : '-';
  let string = str.toLowerCase();

  string = string.replace(/[\[\]\(\)\-\{\}\^\,]/g, '');
  string = string.replace(/[àáâãäåª]/g, 'a');
  string = string.replace(/[éèëê]/g, 'e');
  string = string.replace(/[íìïî]/g, 'i');
  string = string.replace(/[óòöô]/g, 'o');
  string = string.replace(/[úùüû]/g, 'u');
  string = string.replace(/[ñ]/g, 'n');
  string = string.replace(/[ç]/g, 'c');
  string = string.replace(/ /g, wsReplace);

  return string;
};

export const getFirstLetter = (name) => name.toUpperCase()[0];

export const calculateAge = (birthdayDate) => {
  const today = new Date();
  const birthday = new Date(birthdayDate);
  const month = today.getMonth() - birthday.getMonth();
  let age = today.getFullYear() - birthday.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) age -= 1;

  return (age < 100) ? age : null;
};

export const formatDate = (birthdayDate) => {
  const parts = birthdayDate.split('-');
  const birthday = new Date(parts[0], (parts[1] - 1), parts[2], 12, 0o0, 0o0);

  const options = { month: 'long' };

  if (calculateAge(birthdayDate)) {
    return `${birthday.getUTCDate()} de ${birthday.toLocaleDateString('es-AR', options)} de ${birthday.getUTCFullYear()}`;
  }

  return `${birthday.getUTCDate()} de ${birthday.toLocaleDateString('es-AR', options)}`;
};

export const appendFormattedData = (formData, data) => {
  Object.keys(data).forEach((key) => {
    const parsedData = data[key] === null ? '' : data[key];
    const value = typeof parsedData === 'string' ? parsedData : JSON.stringify(parsedData);
    formData.append(`${key}`, value);
  });
};
