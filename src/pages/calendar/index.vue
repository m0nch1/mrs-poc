<template>
  <div>
    <h1>イベントー覧</h1>
    <ul>
      <li v-for="event in events" :key="event.id">
        <div>イベント名：{{ event.summary }}</div>
        <div>イベント開始日時：{{ event.start }}</div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";
import type { Schema$Events } from "googleapi";
const { data: events } = await useSWRV<Schema$Events[]>(
  "/api/google/calendar/list",
  undefined,
  { refreshInterval: 10000 }
);
</script>
