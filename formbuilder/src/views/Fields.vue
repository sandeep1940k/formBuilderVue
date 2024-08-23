<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';
import { FIELDS } from '@/constants/Fields';

// Define emits
const emit = defineEmits(['manage-dragging-field']);

const draggingField = ref(null);
const dragElement = ref(null);
const dropTarget = ref(null); // Define drop target

const onMouseDown = (event, field) => {
    startDrag(event, field);
};

const onTouchStart = (event, field) => {
    event.preventDefault(); // Prevents default scrolling behavior
    startDrag(event.touches[0], field);
};

const startDrag = (event, field) => {
    draggingField.value = field;

    // Create a clone of the field element
    dragElement.value = event.target.cloneNode(true);
    dragElement.value.style.position = 'absolute';
    dragElement.value.style.pointerEvents = 'none'; // Ignore pointer events on the clone
    dragElement.value.style.zIndex = '1000';
    document.body.appendChild(dragElement.value);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);

    performDrag(event.clientX, event.clientY); // Initial positioning
};

const onMouseMove = (event) => {
    performDrag(event.clientX, event.clientY);
};

const onTouchMove = (event) => {
    performDrag(event.touches[0].clientX, event.touches[0].clientY);
};

const onMouseUp = (event) => {
    handleDrop(event.clientX, event.clientY);
    endDrag();
};

const onTouchEnd = (event) => {
    handleDrop(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    endDrag();
};

const performDrag = (x, y) => {
    if (dragElement.value) {
        dragElement.value.style.left = `${x}px`;
        dragElement.value.style.top = `${y}px`;
    }
};

const handleDrop = (x, y) => {
    const elementBelow = document.elementFromPoint(x, y);
    if (elementBelow && dropTarget.value && dropTarget.value.contains(elementBelow)) {
        dropTarget.value.style.backgroundColor = 'lightgreen'; 
        emit('manage-container', draggingField.value);
        setTimeout(() => {
            if (dropTarget.value) {
                dropTarget.value.style.backgroundColor = 'unset'; 
            }
        }, 500);
    } else {
        console.log('Dropped outside of target');
    }
};

const endDrag = () => {
    if (dragElement.value) {
        document.body.removeChild(dragElement.value);
        dragElement.value = null;
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);

    draggingField.value = null;
};

onMounted(() => {
    // Example drop target
    dropTarget.value = document.querySelector('.drop-target');
});

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
});
</script>

<template>
    <div class="fields">
        <div v-for="field in FIELDS" :key="field.id" class="field" @mousedown="onMouseDown($event, field)"
            @touchstart="onTouchStart($event, field)">
            <i :class="[field.icon, 'pointer-event-none']"></i>
            <div class="field-name pointer-event-none">{{ field.tabName }}</div>
        </div>
    </div>
</template>

<style scoped>
.fields {
    background-color: gray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.field {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    cursor: pointer;
    user-select: none;
}

.field-name {
    margin-left: 10px;
}

.pointer-event-none {
    pointer-events: none;
}

.drop-target {
    margin-top: 20px;
    padding: 20px;
    background-color: lightblue;
    border: 2px dashed #333;
    text-align: center;
    min-height: 100px;
}
</style>
