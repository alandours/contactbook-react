import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { objectOf, any } from 'prop-types';

import ProfileSection from '@components/ProfileSection';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import RemoveButton from './components/RemoveButton';

import styled from './styled';

const mapStateToProps = (state) => state;

const SecondaryForm = ({ contact, appData }) => {
  const { register, control, watch } = useFormContext();

  const { fields: aliases, append: appendAlias, remove: removeAlias } = useFieldArray({ control, name: 'aliases' });
  const { fields: numbers, append: appendNumber, remove: removeNumber } = useFieldArray({ control, name: 'numbers' });
  const { fields: emails, append: appendEmail, remove: removeEmail } = useFieldArray({ control, name: 'emails' });
  const { fields: social, append: appendSocial, remove: removeSocial } = useFieldArray({ control, name: 'social' });

  const { numberTypes, emailTypes, socialNetworks } = appData || {};
  const { id: contactId } = contact || {};

  return (
    <>
      <ProfileSection title="Aliases" icon="id-card" sticky>
        {
          aliases.map((alias, index) => (
            <styled.FormField key={alias.id}>
              <TextInput
                name={`aliases[${index}].alias`}
                defaultValue={alias.alias}
                label="Alias"
              />
              <input
                type="hidden"
                name={`aliases[${index}].id`}
                ref={register()}
                defaultValue={alias.id}
              />
              <RemoveButton
                type="button"
                handleClick={() => removeAlias(index)}
              />
            </styled.FormField>
          ))
        }
        <Button
          type="button"
          handleClick={() => appendAlias({ alias: '' })}
        >
          Add new alias
        </Button>
      </ProfileSection>
      <ProfileSection title="Numbers" icon="phone" sticky>
        {
          numbers.map((number, index) => {
            const numberType = watch(`numbers[${index}].type`);

            return (
              <styled.FormField key={number.id}>
                <TextInput
                  name={`numbers[${index}].number`}
                  defaultValue={number.number}
                  label="Phone number"
                />
                <styled.Select
                  name={`numbers[${index}].type`}
                  ref={register()}
                  defaultValue={number.id_type}
                >
                  {
                    numberTypes.map((type) => {
                      const { id, name } = type;
                      return <option key={id} value={id}>{name}</option>;
                    })
                  }
                </styled.Select>
                <TextInput
                  name={`numbers[${index}].custom_label`}
                  disabled={numberType !== '999'}
                  defaultValue={numberType === '999' && number.custom_label ? number.custom_label : ''}
                  label="Custom name"
                />
                <input
                  type="hidden"
                  name={`numbers[${index}].id`}
                  ref={register()}
                  defaultValue={number.id}
                />
                <RemoveButton
                  type="button"
                  handleClick={() => removeNumber(index)}
                />
              </styled.FormField>
            );
          })
        }
        <Button
          type="button"
          handleClick={() => appendNumber({
            id_contact: contactId,
            id_type: 1,
            number: '',
            custom_label: null
          })}
        >
          Add new phone number
        </Button>
      </ProfileSection>
      <ProfileSection title="Emails" icon="envelope" sticky>
        {
          emails.map((email, index) => {
            const emailType = watch(`emails[${index}].type`);

            return (
              <styled.FormField key={email.id}>
                <TextInput
                  name={`emails[${index}].email`}
                  defaultValue={email.email}
                  label="E-mail"
                />
                <styled.Select
                  name={`emails[${index}].type`}
                  ref={register()}
                  defaultValue={email.id_type}
                >
                  {
                    emailTypes.map((type) => {
                      const { id, name } = type;
                      return <option key={id} value={id}>{name}</option>;
                    })
                  }
                </styled.Select>
                <TextInput
                  name={`emails[${index}].custom_label`}
                  disabled={emailType !== '999'}
                  defaultValue={emailType === '999' && email.custom_label ? email.custom_label : ''}
                  label="Custom name"
                />
                <input
                  type="hidden"
                  name={`emails[${index}].id`}
                  ref={register()}
                  defaultValue={email.id}
                />
                <RemoveButton
                  type="button"
                  handleClick={() => removeEmail(index)}
                />
              </styled.FormField>
            );
          })
        }
        <Button
          type="button"
          handleClick={() => appendEmail({
            id_contact: contactId,
            id_type: 1,
            email: '',
            custom_label: null
          })}
        >
          Add new e-mail
        </Button>
      </ProfileSection>
      <ProfileSection title="Social networks" icon="share-alt" sticky>
        {
          social && social.map((username, index) => {
            const network = watch(`social[${index}].id_network`);

            return (
              <styled.FormField key={username.id}>
                <TextInput
                  name={`social[${index}].username`}
                  defaultValue={username.username}
                  label="Username"
                />
                <styled.Select
                  name={`social[${index}].id_network`}
                  ref={register()}
                  defaultValue={username.id_network}
                >
                  {
                    socialNetworks.map((type) => {
                      const { id, name } = type;
                      return <option key={id} value={id}>{name}</option>;
                    })
                  }
                </styled.Select>
                <TextInput
                  name={`social[${index}].custom_label`}
                  disabled={network !== '999'}
                  defaultValue={network === '999' && username.custom_label ? username.custom_label : ''}
                  label="Custom name"
                />
                <input
                  type="hidden"
                  name={`social[${index}].id`}
                  ref={register()}
                  defaultValue={username.id}
                />
                <RemoveButton
                  type="button"
                  handleClick={() => removeSocial(index)}
                />
              </styled.FormField>
            );
          })
        }
        <Button
          type="button"
          handleClick={() => appendSocial({
            id_contact: contactId,
            id_network: 1,
            username: '',
            custom_label: null
          })}
        >
          Add new social network
        </Button>
      </ProfileSection>
      <ProfileSection title="Notes" icon="sticky-note" sticky>
        <textarea name="notes" ref={register} />
      </ProfileSection>
    </>
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
