<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-8">
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <b-form @submit.stop.prevent="handleSubmit(submit)" v-if="form.show">
            <validation-provider
              name="Nom / prénom"
              :rules="{ required: true, min: 5, max: 100 }"
              v-slot="validationContext"
            >
              <b-form-group
                id="name-group"
                label="Nom / prénom *"
                label-for="name"
              >
                <b-form-input
                  id="name"
                  v-model="form.name"
                  placeholder="Votre nom et prénom"
                  @input="updateForm('name')"
                  :state="getValidationState(validationContext)"
                  aria-describedby="name-live-feedback"
                ></b-form-input>
                <b-form-invalid-feedback id="name-live-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <validation-provider
              name="Téléphone portable"
              rules="numeric"
              v-slot="validationContext"
            >
              <b-form-group
                id="phone-group"
                label="Téléphone portable"
                label-for="phone"
              >
                <b-form-input
                  id="phone"
                  v-model="form.phone"
                  placeholder="Votre numéro de téléphone portable"
                  @input="updateForm('phone')"
                  :state="getValidationState(validationContext)"
                  aria-describedby="phone-live-feedback"
                ></b-form-input>

                <b-form-invalid-feedback id="type-live-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <validation-provider
              name="Type"
              :rules="{ required: true }"
              v-slot="validationContext"
            >
              <b-form-group id="type-group" label="Type *" label-for="type">
                <b-form-select
                  id="type"
                  v-model="form.type"
                  :options="types"
                  @input="updateForm('type')"
                  :state="getValidationState(validationContext)"
                  aria-describedby="type-live-feedback"
                ></b-form-select>

                <b-form-invalid-feedback id="type-live-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>

            <validation-provider
              name="Votre demande"
              :rules="{ required: true, min: 10 }"
              v-slot="validationContext"
            >
              <b-form-group
                id="message-group"
                label="Votre demande *"
                label-for="message"
              >
                <b-form-textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Saisissez votre demande"
                  rows="3"
                  max-rows="6"
                  @input="updateForm('message')"
                  :state="getValidationState(validationContext)"
                  aria-describedby="message-live-feedback"
                ></b-form-textarea>
                <b-form-invalid-feedback id="message-live-feedback">{{
                  validationContext.errors[0]
                }}</b-form-invalid-feedback>
              </b-form-group>
            </validation-provider>
            <b-button type="submit" variant="primary">Envoyer</b-button>
          </b-form>
        </validation-observer>
        <div v-if="showForm === false">
          <p>{{ validationMessage }}</p>
          <b-button type="button" variant="primary" @click="setFormDisplay()"
            >Effectuer une nouvelle demande</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "../repositories/RepositoryFactory";
const FormRepository = RepositoryFactory.get("form");
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      types: [
        { value: null, text: "Sélectionnez un type" },
        "Recrutement",
        "Aide",
        "Devis"
      ]
    };
  },
  computed: {
    ...mapState({ form: state => state.form }),
    ...mapGetters([
      "getStateValues",
      "getName",
      "showForm",
      "validationMessage"
    ]),
    ...mapActions(["setFormDisplay"])
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    updateForm(input, payload) {
      this.$store.commit("UPDATE_FORM", input);
    },
    async submit() {
      const { data } = await FormRepository.sendMessage();
      if (data.success) {
        this.$store.commit("VALIDATE_FORM", data.message);
      }
    }
  }
};
</script>
