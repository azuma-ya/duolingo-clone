import {
  Edit,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

const UnitEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" label="Id" validate={required()} />
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput
          source="dedcription"
          label="Description"
          validate={required()}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" label="Order" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export default UnitEdit;
