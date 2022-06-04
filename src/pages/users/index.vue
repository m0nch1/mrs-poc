<template>
  <div>
    <h1>ユーザー覧</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";
import type { User } from "~/types/api/users";
const { data: users } = useSWRV<User[]>("/api/users");
</script>
