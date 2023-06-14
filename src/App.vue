<script>
import Navbar from "./components/Navbar.vue";
import TodoList from "./components/TodoList.vue";

export default {
    name: "App",
    components: {
        Navbar,
        TodoList,
    },
};
</script>

<template>
    <main id="app">
        <Navbar />
        <section class="container py-4">
            <TodoList />
        </section>
    </main>
</template>

<style lang="css">
#app {
    min-height: 100dvh;
    background: linear-gradient(to bottom right, #00662a, #fc6);
    color: #fff;
}
</style>
