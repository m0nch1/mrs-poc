<template>
  <div>
    <h1>会議室ー覧</h1>
    <ul>
      <li
        v-for="(resource, index) in resources"
        :key="resource.resourceId || index"
      >
        <div>会議室名：{{ resource.resourceName }}</div>
        <div>会議室のメールアドレス：{{ resource.resourceEmail }}</div>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import useSWRV from "swrv";
import { admin_directory_v1 } from "googleapis";

const { data: resources } = await useSWRV<
  admin_directory_v1.Schema$CalendarResource[]
>("/api/google/admin/resource", undefined);
</script>
