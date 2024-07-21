import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ChallengeCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="question" label="Question" validate={required()} />
        <SelectInput
          source="type"
          choices={[
            {
              id: "SELECT",
              name: "SELECT",
            },
            {
              id: "ASSIST",
              name: "ASSIST",
            },
          ]}
          validate={required()}
        />
        <ReferenceInput source="lessonId" reference="lessons" />
        <NumberInput source="order" label="Order" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default ChallengeCreate;
