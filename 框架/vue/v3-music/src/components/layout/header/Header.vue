<template>
    <div class="flex items-center justify-between drag h-14">
        <div class="flex items-center pl-15">
            <IconPark :icon="Left" :size="iconsize" stroke-width="2" class="icon-button" />
            <IconPark :icon="Right" :size="iconsize" stroke-width="2" class="icon-button" />
            <div class="search no-drag ml-2">
                <SearchPop />
            </div>
        </div>
        <div class="flex items-center mr-5">
            <IconPark :icon="Mail" :size="iconsize" stroke-width="2" class="icon-button" />
            <IconPark :icon="Platte" :size="iconsize" stroke-width="2" class="icon-button" />
            <IconPark :icon="HamburgerButton" :size="iconsize" stroke-width="2" class="icon-button" />
        </div>
    </div>
</template>

<script setup>
import SearchPop from '@/components/layout/header/SearchPop.vue'
import IconPark from '@/components/common/IconPark.vue';
import { Left, Right, Mail, Platte, HamburgerButton } from '@icon-park/vue-next'
</script>

<style scoped></style>