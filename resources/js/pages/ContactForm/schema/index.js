import * as yup from 'yup';

const emptyStringToNull = (currentValue, originalValue) => {
  return originalValue.trim() === '' ? null : currentValue;
};

const schema = yup.object().shape({
  name: yup.string()
    .required('The name is required')
    .max(50, "The name can't be longer than 50 characters"),
  lastname: yup.string()
    .max(50, "The last name can't be longer than 50 characters"),
  birthday: yup.date('The birthday should be a date')
    .typeError('It should be a valid date')
    .max(new Date(), "The birthday can't be in the future")
    .nullable()
    .transform(emptyStringToNull),
  address: yup.string()
    .max(50, "The address can't be longer than 50 characters"),
  met: yup.number()
    .typeError('It should be a valid year')
    .min(1900, "The year can't be before 1900")
    .max(new Date().getFullYear(), "The year can't be in the future")
    .nullable()
    .transform(emptyStringToNull),
  aliases: yup.array().of(yup.object().shape({
    alias: yup.string()
      .max(50, "The alias can't be longer than 50 characters")
  })),
  numbers: yup.array().of(yup.object().shape({
    number: yup.string()
      .max(50, "The phone number can't be longer than 50 characters"),
    id_type: yup.number('The number type id should be a number'),
    custom_label: yup.string()
      .max(50, "The label can't be longer than 50 characters")
  })),
  emails: yup.array().of(yup.object().shape({
    email: yup.string()
      .max(80, "The email can't be longer than 50 characters"),
    id_type: yup.number('The email type id should be a number'),
    custom_label: yup.string()
      .max(50, "The label can't be longer than 50 characters")
  })),
  social: yup.array().of(yup.object().shape({
    username: yup.string()
      .max(80, "The username can't be longer than 50 characters"),
    id_network: yup.number('The network id should be a number'),
    custom_label: yup.string()
      .max(50, "The label can't be longer than 50 characters")
  })),
  notes: yup.string()
    .max(2000, "The notes can't be longer than 2000 characters")
});

export default schema;
