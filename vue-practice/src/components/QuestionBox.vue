<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        Some Questions...
      </template>

      <hr class="my-4" />

      <p>
        Answers go here...
      </p>

      <b-button variant="primary" href="#">Submit</b-button>
      <b-button variant="success" href="#">Next Question</b-button>
    </b-jumbotron>
  </div>
</template>