<script>
export default {
    name: "TodoNote",
    data() {
        return {
            current: true,
        };
    },
    props: {
        text: String,
        desc: String,
        date: String,
        id: {
            type: String,
            default: `${Math.floor(Math.random() * 12000) - 8 * 1}`,
        },
    },
    computed: {
        modified() {
            return new Date(this.date).toLocaleDateString();
        },
    },
    methods: {
        deleteTodo(id) {
            console.log("@Delete", id);
        },
    },
};
</script>
<template>
    <div class="list-group">
        <span class="list-group-item list-group-item-action active text-capitalize">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ text }}</h5>
                <small>{{ modified }}</small>
            </div>
            <br />
            <div class="d-flex justify-content-between gap-2">
                <small>{{ desc }}</small>
                <!-- <small>
                    <button @click="deleteTodo(id)" class="btn btn-outline-light">
                        Delete
                    </button>
                </small> -->
            </div>
        </span>
        <!-- <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">List group item heading</h5>
                <small class="text-body-secondary">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-body-secondary">And some muted small print.</small>
        </a> -->
    </div>
</template>
