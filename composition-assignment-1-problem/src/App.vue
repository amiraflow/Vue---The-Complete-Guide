<template>
<div>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalVisibility">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <h2>My Course Goal Ref Object</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.goalVisibility">{{ courseData.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibilityObjectRef">Toggle Goal</button>
<h2>My Course Goal Reactive Object</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseDataReactive.goalVisibility">{{ courseDataReactive.goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibilityObjectReactive">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</div>

</template>

<script>
import { ref, reactive } from 'vue';
export default {
    setup() {
    const courseGoal = 'Finish the course and get a certificate';
    const goalVisibility = ref(false);

    const courseData = ref({
      goal: 'Finish the course and get a certificate!',
      goalVisibility: false
    });

    const courseDataReactive = reactive({
      goal: 'Finish the course and get a certificate!',
      goalVisibility: false
    })

    function toggleGoalVisibility() {
      goalVisibility.value = !goalVisibility.value;
    }

    function toggleGoalVisibilityObjectRef() {
      courseData.value.goalVisibility =! courseData.value.goalVisibility;
    }

     function toggleGoalVisibilityObjectReactive() {
      courseDataReactive.goalVisibility =! courseDataReactive.goalVisibility;
    }

    return { 
    goal: courseGoal, 
    goalVisibility: goalVisibility, 
    courseData: courseData,
    courseDataReactive: courseDataReactive,
    toggleGoalVisibility: toggleGoalVisibility,
    toggleGoalVisibilityObjectRef: toggleGoalVisibilityObjectRef,
    toggleGoalVisibilityObjectReactive: toggleGoalVisibilityObjectReactive };
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>