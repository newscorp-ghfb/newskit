import {StylePreset} from '../theme/types';

export default {
  radioButtonInput: {
    base: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput020}}',
      borderWidth: '{{borders.borderWidth020}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
      borderStyle: 'solid',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    checked: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput040}}',
      iconColor: '{{colors.interactiveInput040}}',
    },
    'checked:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      iconColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactiveInput050}}',
    },
    'checked:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactiveInput050}}',
    },
    invalid: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveNegative040}}',
    },
    'invalid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveNegative050}}',
    },
    'invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:invalid': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveNegative040}}',
      iconColor: '{{colors.interactiveNegative040}}',
    },
    'checked:invalid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactiveNegative040}}',
    },
    'checked:invalid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveNegative050}}',
      iconColor: '{{colors.interactiveNegative050}}',
    },
    'checked:invalid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactiveNegative050}}',
    },
    valid: {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactivePositive040}}',
    },
    'valid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'valid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactivePositive050}}',
    },
    'valid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
    },
    'checked:valid': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactivePositive040}}',
      iconColor: '{{colors.interactivePositive040}}',
    },
    'checked:valid:focus': {
      backgroundColor: '{{colors.interactiveInput010}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactivePositive040}}',
    },
    'checked:valid:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactivePositive050}}',
      iconColor: '{{colors.interactivePositive050}}',
    },
    'checked:valid:focus:hover': {
      backgroundColor: '{{colors.interactiveInput030}}',
      borderColor: '{{colors.interactiveInput050}}',
      borderWidth: '{{borders.borderWidth030}}',
      iconColor: '{{colors.interactivePositive050}}',
    },
    disabled: {
      backgroundColor: '{{colors.transparent}}',
      borderColor: '{{colors.interactiveDisabled010}}',
    },
    'checked:disabled': {
      backgroundColor: '{{colors.transparent}}',
      borderColor: '{{colors.interactiveDisabled010}}',
      iconColor: '{{colors.inkNonEssential}}',
    },
  },

  radioButtonFeedback: {
    base: {
      backgroundColor: '{{colors.transparent}}',
      borderRadius: '{{borders.borderRadiusCircle}}',
    },
    hover: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    focus: {
      backgroundColor: '{{colors.interactiveInput030}}',
    },
    'valid:focus': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'valid:hover': {
      backgroundColor: '{{colors.interactivePositive010}}',
    },
    'invalid:focus': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
    'invalid:hover': {
      backgroundColor: '{{colors.interactiveNegative010}}',
    },
  },
} as Record<string, StylePreset>;
