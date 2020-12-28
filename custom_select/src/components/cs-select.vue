<template>
  <div class="cs-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "select",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      areOptionsVisible: false
    };
  },
  methods: {
    selectOption(o) {
      this.$emit("customSelect", o);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    this.hideSelect();
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style>
.cs-select {
  position: relative;
  width: 200px;
}
.title {
  border: solid 1px #2c3e50;
  cursor: pointer;
}
.cs-select p {
  margin: 0;
}
.options {
  border: solid 1px #2c3e50;
  position: absolute;
  top: 20px;
  right: 0;
  width: 100%;
}
.options p {
  cursor: pointer;
}
.options p:hover {
  background: #e7e7e7;
}
</style>
