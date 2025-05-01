import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormContainer from "../../ui/FormContainer";
import Checkbox from "../../ui/Checkbox";
import Anchor from "../../ui/Anchor";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

type FormDataType = {
  agrement: boolean;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormDataType>();

  async function onSubmit(data: FormDataType) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles.fieldset}>
        <legend className="screen-read-only">Contact information</legend>
        <div className={styles.full_name_wrapper}>
          <Input
            el="input"
            id="firstName"
            type="text"
            label="First Name"
            placeholder="e.g. Will"
            {...register("firstName")}
          />
          <Input
            el="input"
            id="lastName"
            type="text"
            label="Last Name"
            placeholder="e.g. Smith"
            {...register("lastName")}
          />
        </div>
        <Input
          el="input"
          id="email"
          type="email"
          label="Email "
          placeholder="you@mail.com"
          {...register("email")}
        />
        <Input
          el="textarea"
          id="message"
          label="Message"
          placeholder="Include a message"
          {...register("message")}
        />
        <Checkbox id="agrement" {...register("agrement")}>
          You agree to our <Anchor href="#">privacy policy.</Anchor>
        </Checkbox>
      </fieldset>
      <Button type="submit" disabled={isSubmitting}>
        <span aria-live="polite">
          {!isSubmitting ? "Send message" : "Sending..."}
        </span>
      </Button>
    </FormContainer>
  );
}

export default ContactForm;
