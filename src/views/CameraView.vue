<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const stream = ref()
const is_captured = ref(false)
const capture_url = ref('')

const constraints = {
  video: {
    width: 1920,
    height: 1080,
    facingMode: 'user'
  }
}

const getSnapshot = async () => {
  const stream_setting = stream.value.stream.getVideoTracks()[0].getSettings()

  const width_stream = stream_setting.width
  const height_stream = stream_setting.height

  const blob = await stream.value?.snapshot({ width: width_stream, height: height_stream })
  const url = URL.createObjectURL(blob)

  is_captured.value = true
  capture_url.value = url
}

const retakePhoto = () => {
  is_captured.value = false
  capture_url.value = ''
}

const clockIn = () => {
  router.push('/history')
}
</script>

<template>
  <main>
    <div class="header">
      <div class="header-text">Attendance</div>
    </div>

    <div class="camera-wrapper">
      <camera
        :playsinline="false"
        :constraints="constraints"
        ref="stream"
        autoplay
        v-if="!is_captured"
      >
        <div class="btn-wrapper">
          <button class="full-btn" @click="getSnapshot"></button>
        </div>
      </camera>
      <div class="image-capture" v-if="is_captured && capture_url !== ''">
        <img :src="capture_url" alt="captured" />
        <div class="btn-wrapper">
          <button class="half-btn retake" @click="retakePhoto">Retake</button>
          <button class="half-btn clock" @click="clockIn">Clock in</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 1.5rem;
  border-radius: 0 0 20px 20px;
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: var(--color-background-mute);
  z-index: 1000;
}

.header .header-text {
  font-size: 20px;
  font-weight: bold;
}

/deep/ #video {
  width: auto;
  height: 100%;
}

/deep/ #camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.camera-wrapper {
  width: 100%;
  height: calc(100% - 42px);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 42px;
  overflow: hidden;
}

.camera-wrapper .btn-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;
  bottom: 0;
  padding-bottom: 50px;
}

.camera-wrapper .btn-wrapper .full-btn {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--color-text-contras);
  border-radius: 30px;
  outline: none;
  border: none;
  position: relative;
}

.camera-wrapper .btn-wrapper .full-btn::after {
  content: '';
  position: absolute;
  background-color: transparent;
  border: 2px solid var(--color-text-contras);
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.camera-wrapper .image-capture {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.camera-wrapper .image-capture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.camera-wrapper .image-capture .btn-wrapper {
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  position: absolute;
  bottom: 0;
  padding-bottom: 50px;
}

.camera-wrapper .image-capture .btn-wrapper .half-btn {
  margin: 0 10px;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  border-radius: 30px;
  outline: none;
  border: none;
  color: var(--color-text-contras);
}

.camera-wrapper .image-capture .btn-wrapper .half-btn.retake {
  background-color: #ffb073;
  /* color: #2570ca; */
}

.camera-wrapper .image-capture .btn-wrapper .half-btn.clock {
  background-color: #f05252;
  /* color: #d92f2f; */
}
</style>
