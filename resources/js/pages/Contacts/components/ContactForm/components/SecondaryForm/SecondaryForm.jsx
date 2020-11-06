import React from 'react';
import { connect } from 'react-redux';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { objectOf, any } from 'prop-types';

import ProfileSection from '@components/ProfileSection';
import Button from '@components/Button';
import Input from '@components/Form/Input';
import Select from '@components/Form/Select';
import Textarea from '@components/Form/Textarea';

import styled from './styled';

const mapStateToProps = (state) => state;

const SecondaryForm = ({ contact, appData }) => {
  const { register, control, watch, errors } = useFormContext();

  const { fields: aliases, append: appendAlias, remove: removeAlias } = useFieldArray({ control, name: 'aliases' });
  const { fields: numbers, append: appendNumber, remove: removeNumber } = useFieldArray({ control, name: 'numbers' });
  const { fields: emails, append: appendEmail, remove: removeEmail } = useFieldArray({ control, name: 'emails' });
  const { fields: social, append: appendSocial, remove: removeSocial } = useFieldArray({ control, name: 'social' });

  const { numberTypes, emailTypes, socialNetworks } = appData || {};
  const { id: contactId } = contact || {};

  const renderAliasField = (alias, index) => {
    const { aliases: err } = errors || {};
    const { message } = (err && err[index] && err[index].alias && err[index].alias) || {};

    return (
      <styled.FormField key={alias.id}>
        <Input
          name={`aliases[${index}].alias`}
          defaultValue={alias.alias}
          label="Alias"
          error={message}
        />
        <Input
          type="hidden"
          name={`aliases[${index}].id`}
          ref={register()}
          defaultValue={alias.id}
        />
        <styled.RemoveButton
          type="button"
          handleClick={() => removeAlias(index)}
        />
      </styled.FormField>
    );
  };


  const renderNumberFields = (number, index) => {
    const numberType = watch(`numbers[${index}].type`);
    const { numbers: err } = errors || {};
    const { message } = (err && err[index] && err[index].number && err[index].number) || {};

    return (
      <styled.FormField key={number.id}>
        <Input
          name={`numbers[${index}].number`}
          defaultValue={number.number}
          label="Phone number"
          error={message}
        />
        <Select
          name={`numbers[${index}].type`}
          defaultValue={number.id_type}
        >
          {
            numberTypes.map((type) => {
              const { id, name } = type;
              return <styled.Option key={id} value={id}>{name}</styled.Option>;
            })
          }
        </Select>
        <Input
          name={`numbers[${index}].custom_label`}
          disabled={numberType !== '999'}
          defaultValue={numberType === '999' && number.custom_label ? number.custom_label : ''}
          label="Custom name"
        />
        <Input
          type="hidden"
          name={`numbers[${index}].id`}
          ref={register()}
          defaultValue={number.id}
        />
        <styled.RemoveButton
          type="button"
          handleClick={() => removeNumber(index)}
        />
      </styled.FormField>
    );
  };

  const renderEmailFields = (email, index) => {
    const emailType = watch(`emails[${index}].type`);
    const { emails: err } = errors || {};
    const { message } = (err && err[index] && err[index].email && err[index].email) || {};

    return (
      <styled.FormField key={email.id}>
        <Input
          name={`emails[${index}].email`}
          defaultValue={email.email}
          label="E-mail"
          error={message}
        />
        <Select
          name={`emails[${index}].type`}
          defaultValue={email.id_type}
        >
          {
            emailTypes.map((type) => {
              const { id, name } = type;
              return <styled.Option key={id} value={id}>{name}</styled.Option>;
            })
          }
        </Select>
        <Input
          name={`emails[${index}].custom_label`}
          disabled={emailType !== '999'}
          defaultValue={emailType === '999' && email.custom_label ? email.custom_label : ''}
          label="Custom name"
        />
        <Input
          type="hidden"
          name={`emails[${index}].id`}
          ref={register()}
          defaultValue={email.id}
        />
        <styled.RemoveButton
          type="button"
          handleClick={() => removeEmail(index)}
        />
      </styled.FormField>
    );
  };

  const renderSocialFields = (username, index) => {
    const network = watch(`social[${index}].id_network`);
    const { social: err } = errors || {};
    const { message } = (err && err[index] && err[index].username && err[index].username) || {};

    return (
      <styled.FormField key={username.id}>
        <Input
          name={`social[${index}].username`}
          defaultValue={username.username}
          label="Username"
          error={message}
        />
        <Select
          name={`social[${index}].id_network`}
          defaultValue={username.id_network}
        >
          {
            socialNetworks.map((type) => {
              const { id, name } = type;
              return <styled.Option key={id} value={id}>{name}</styled.Option>;
            })
          }
        </Select>
        <Input
          name={`social[${index}].custom_label`}
          disabled={network !== '999'}
          defaultValue={network === '999' && username.custom_label ? username.custom_label : ''}
          label="Custom name"
        />
        <Input
          type="hidden"
          name={`social[${index}].id`}
          ref={register()}
          defaultValue={username.id}
        />
        <styled.RemoveButton
          type="button"
          handleClick={() => removeSocial(index)}
        />
      </styled.FormField>
    );
  };


  return (
    <styled.SecondaryForm>
      <ProfileSection title="Aliases" icon="id-card" sticky>
        { aliases.length ? aliases.map(renderAliasField) : appendAlias({ alias: '' }, false) }
        <Button
          type="button"
          variant="text"
          handleClick={() => appendAlias({ alias: '' })}
        >
          Add a new alias
        </Button>
      </ProfileSection>
      <ProfileSection title="Phone numbers" icon="phone" sticky>
        { numbers.length ? numbers.map(renderNumberFields) : appendNumber({}, false) }
        <Button
          type="button"
          variant="text"
          handleClick={() => appendNumber({
            id_contact: contactId,
            id_type: 1,
            number: '',
            custom_label: null
          })}
        >
          Add a new phone number
        </Button>
      </ProfileSection>
      <ProfileSection title="Emails" icon="envelope" sticky>
        { emails.length ? emails.map(renderEmailFields) : appendEmail({}, false) }
        <Button
          type="button"
          variant="text"
          handleClick={() => appendEmail({
            id_contact: contactId,
            id_type: 1,
            email: '',
            custom_label: null
          })}
        >
          Add a new e-mail
        </Button>
      </ProfileSection>
      <ProfileSection title="Social networks" icon="share-alt" sticky>
        { social.length ? social.map(renderSocialFields) : appendSocial({}, false) }
        <Button
          type="button"
          variant="text"
          handleClick={() => appendSocial({
            id_contact: contactId,
            id_network: 1,
            username: '',
            custom_label: null
          })}
        >
          Add a new social network
        </Button>
      </ProfileSection>
      <ProfileSection title="Notes" icon="sticky-note" sticky>
        <Textarea
          name="notes"
        />
      </ProfileSection>
    </styled.SecondaryForm>
  );
};

SecondaryForm.propTypes = {
  contact: objectOf(any),
  appData: objectOf(any)
};

SecondaryForm.defaultProps = {
  contact: {},
  appData: {}
};

export default connect(mapStateToProps)(SecondaryForm);
