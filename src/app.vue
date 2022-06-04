<template>
  <div>
    <h1>ユーザー覧</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/types/api/users";
const { data: users } = await useFetch<User[]>("/api/users");
</script>
