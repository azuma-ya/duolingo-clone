import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

const ChallengeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" validate={required()} />
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
    </Edit>
  );
};

export default ChallengeEdit;
