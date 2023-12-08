<template>
  <label>
    {{ props.label }}

    <input
      :type="props.type"
      :value="modelValue"
      :placeholder="props.placeholder"
      @input="updateValue"
    />
  </label>
</template>

<script setup lang="ts">
interface InputProps {
  label: string
  type: 'text' | 'number' | 'password'
  modelValue: string | number
  placeholder: string
}

const props = defineProps<InputProps>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>
