<script setup>
import { onMounted, ref, watch } from "vue";
import TodoNote from "./TodoNote.vue";

const todos = ref([]);
const error = ref("");
const todo = ref({
    text: "",
    desc: "",
});

function validateTodo() {
    const { text, desc } = todo.value;
    if (text.length < 5 || desc.length < 5) {
        error.value = "Minimum 5 Characters Required!";
        return;
    }
    error.value = "";
    addTodo(text, desc);
}

function addTodo(text, desc) {
    todos.value.push({
        text,
        desc,
        date: `${new Date()}`,
        id: `${Math.floor(Math.random() * 12000) - 8 * 1}`,
    });

    todo.value = {
        text: "",
        desc: "",
    };
}

function updateCache(data) {
    localStorage.setItem("vuejs-v2-todos", JSON.stringify(data));
}

function clearData() {
    if (window.confirm("Are you Sure, This will delete all the todos?")) {
        todos.value = [];
    }
}

onMounted(() => {
    todos.value = JSON.parse(localStorage.getItem("vuejs-v2-todos") || "[]");
});

watch(
    todos,
    (newV, oldV) => {
        console.log("@Change", { newV, oldV });
        updateCache(newV);
    },
    { deep: true }
);
</script>
<template>
    <div class="d-flex flex-column gap-4">
        <form @submit.prevent="validateTodo" class="col g-4">
            <div class="col-md-4">
                <label for="validationCustomTodo" class="form-label">Todo</label>
                <div class="input-group has-validation">
                    <span class="input-group-text fw-bold" id="inputGroupPrepend"
                        >#Todo</span
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationCustomTodo"
                        aria-describedby="inputGroupPrepend"
                        placeholder="Enter a Todo.."
                        v-model.trim="todo.text"
                    />

                    <div class="invalid-feedback">{{ "Error" }}</div>
                </div>
                <div class="my-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                        >Add Description</label
                    >
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Todo Description.."
                        v-model.trim="todo.desc"
                        @keyup.enter="validateTodo"
                    ></textarea>
                    <br />
                    <span>{{ error }}</span>
                </div>
            </div>
            <div class="d-flex flex-row col-12 gap-2">
                <button class="btn btn-primary text-uppercase" type="submit">
                    Submit
                </button>
                <button class="btn btn-warning ml-2" type="button" @click="clearData">
                    Clear Data
                </button>
            </div>
        </form>
        <TodoNote
            v-for="(data, i) in todos"
            :key="i"
            :text="data.text"
            :desc="data.desc"
            :date="data.date"
            :id="data.id"
        />
    </div>
</template>
