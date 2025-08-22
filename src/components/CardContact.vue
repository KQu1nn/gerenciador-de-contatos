<template>
    <div class="w-90 min-h-44 flex flex-col gap-3 bg-white p-5 border border-gray-300 rounded-lg">
        <div class="flex flex-row items-center gap-3">
            <div class="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-500">
                <User color="white" size="25" />
            </div>
            <div>
                <h2 class="text-lg font-medium">Ramon Kelvin</h2>
                <p class="text-sm text-gray-500">Adicionado em <br> 22/08/2025</p>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span><Mail size="15" /></span>
                email@email.com
            </p>
            <p class="flex flex-row gap-2 items-center text-sm text-gray-500">
                <span><Phone size="15" /></span>
                (87)9999-999
            </p>
        </div>
    </div>
</template>
<script setup>
import { User } from 'lucide-vue-next';
import { Mail } from 'lucide-vue-next';
import { Phone } from 'lucide-vue-next';
</script>