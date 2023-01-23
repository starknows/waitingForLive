<script>
  import "./style/normalize.css";
  //   console.log(new Date(), new Date("2023-01-12T21:16:40+00:00"));
  const timeString = "2023-01-12T21:16:40+00:00";
  let nowStreamTime = null;
  function getSubtractTimeFromNow(dateString) {
    const dayOffset = new Date() - new Date(dateString);
    const subtractDay = Math.floor(dayOffset / 86400000);
    const hourOffset = dayOffset % 86400000;
    const subtractHour = Math.floor(hourOffset / 3600000);
    const minuteOffset = hourOffset % 3600000;
    const substractMinute = Math.floor(minuteOffset / 60000);
    const secondOffset = minuteOffset % 60000;
    const substractSecond = Math.floor(secondOffset / 1000);
    return [subtractDay, subtractHour, substractMinute, substractSecond];
  }
  nowStreamTime = getSubtractTimeFromNow(timeString);
  window.setInterval(() => {
    nowStreamTime = getSubtractTimeFromNow(timeString);
  }, 1000);
  // https://last-stream-time-4ko2j3acva-as.a.run.app
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const checkChannel = urlParams.get("channel") || "@Kintsuai";
  //   fetch(
  //     `https://www.youtube.com/${
  //       checkChannel[0] === "@" ? checkChannel : "@" + checkChannel
  //     }/streams`
  //   )
  //     .then((res) => res.text())
  //     .then((text) => {
  //       const firstStream = text.match(/"videoRenderer":{"videoId":"(.*?)",/m);
  //       console.log("firstSteamID = ", firstStream);
  //     });
  const urlParams = new URLSearchParams(window.location.search);
  const checkChannel = urlParams.get("channel") || "@Kintsuai";
  const postBody = {
    channelId: checkChannel[0] === "@" ? checkChannel : "@" + checkChannel,
  };
  console.log(postBody);
  fetch("https://last-stream-time-4ko2j3acva-as.a.run.app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(postBody),
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
</script>

<main>
  <div class="modal-wrapper">
    <div class="bg" style={`opacity: ${0.6 - nowStreamTime[0] * 0.05}`} />
    {#if nowStreamTime}
      <p class="head">距離 金姓女鬼 上一次直播已經過了</p>
      <p class="time">
        {`${nowStreamTime[0]} 天 ${nowStreamTime[1]}小時 ${nowStreamTime[2]}分鐘 ${nowStreamTime[3]}秒`}
      </p>
      <p class="subscripe">
        <a
          target="_blank"
          href="https://www.youtube.com/@Kintsuai?sub_confirmation=1"
          rel="noreferrer noopener">>> 譴責她</a
        >
      </p>
    {:else}
      <span>Checking...</span>
    {/if}
  </div>
</main>

<style lang="sass">
*
	font-family: 'Noto Serif TC', serif
	// font-family: 'Roboto', sans-serif
	box-sizing: border-box
main
	position: relative
	text-align: center
	width: 100%
	height: 100%
	display: flex
	align-items: center
	justify-content: center
.bg
	position: absolute
	z-index: -1
	top: 50%
	left: 0
	transform: translateY(-50%)
	width: 100%
	height: 70%
	background: no-repeat center top/cover url('./ghost.jpg')
	opacity: 0.4
p
	color: #333
	padding: 8px
	margin: 0
	border-radius: 8px
	&.head
		display: inline-block
		font-size: 2rem
		font-weight: 500
	&.time
		font-size: 5rem
		font-weight: 900
	&.subscripe
		margin-top: 2rem
		font-size: 1.5rem
		font-weight: 500
		& > a
			color: #c91032
span
	font-size: 2rem
	color: #aaa
</style>
