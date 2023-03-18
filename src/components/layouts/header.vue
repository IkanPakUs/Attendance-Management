<template>
  <header>
    <div class="profile">
      <div class="summary">
        <div class="company">
          <h6>PT. Aman Sejahtera</h6>
        </div>
        <div class="user">
          <div class="name">
            <h5>Komang Gede Ksatria Arya Wirawan</h5>
          </div>
          <div class="position"><span>Web Developer</span></div>
        </div>
      </div>
      <div class="avatar">
        <div class="avatar-wrap">
          <img src="/img/avatar.png" alt="profile" />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 165px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  color: var(--color-text);
}
.profile {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
}

.profile .summary {
  width: 75%;
}

.profile .summary .company {
  padding-bottom: 15px;
}
.profile .summary .user .position {
  font-size: 13px;
}

.profile .avatar {
  width: 25%;
  display: flex;
  justify-content: end;
  align-items: center;
}

.profile .avatar .avatar-wrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.profile .avatar .avatar-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
