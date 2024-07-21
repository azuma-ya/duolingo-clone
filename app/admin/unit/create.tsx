import {
  Create,
  NumberInput,
  ReferenceInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

const UnitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput
          source="description"
          label="Description"
          validate={required()}
        />
        <ReferenceInput source="courseId" reference="courses" />
        <NumberInput source="order" label="Order" validate={required()} />
      </SimpleForm>
    </Create>
  );
};

export default UnitCreate;
