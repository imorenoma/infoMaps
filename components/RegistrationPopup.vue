<template>
    <div v-if="isOpen" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <RegistrationForm @close-popup="closePopup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  import RegistrationForm from './RegistrationForm.vue';
  
  export default {
    components: {
      RegistrationForm
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      openPopup() {
        this.isOpen = true;
      },
      closePopup() {
        this.isOpen = false;
      }
    }
  };
  </script>