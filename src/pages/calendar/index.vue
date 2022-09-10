<template>
  <div>
    <h1>イベントー覧</h1>
    <ul>
      <li v-for="(event, index) in events" :key="event.id || index">
        <div>イベント名：{{ event.summary }}</div>
        <div>イベント開始日時：{{ event.start }}</div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";
import { calendar_v3 } from "googleapis";

const { data: events } = await useSWRV<calendar_v3.Schema$Event[]>(
  "/api/google/calendar/list",
  undefined,
  { refreshInterval: 10000 }
);
</script>
