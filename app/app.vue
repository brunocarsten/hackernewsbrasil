<template>
  <div class="relative grid grid-cols-6">
    <div class="col-span-1">
      <Navigation/>
    </div>
    <div class="col-span-5">
      <div class="bg-white dark:bg-black shadow-md sticky top-0 dark:border-gray-700 border-b">
        <UContainer>
          <div class="h-[80px] w-full flex items-center justify-between">
            <UBreadcrumb
                class=""
                divider="\"
                :links="[{ label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' }]"
            />
            <ColorScheme>
              <USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']"/>
            </ColorScheme>
          </div>
        </UContainer>
      </div>
      <div class="py-8 w-full h-screen bg-gray-200  dark:bg-gray-800">
        <UContainer>
          <NuxtPage/>
        </UContainer>
      </div>
    </div>
  </div>
</template>
