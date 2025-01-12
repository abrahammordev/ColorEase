import styles from "./styles.module/Title.module.css";

//Title component that contains the title of the app.

function Title() {
  return (
    <div className={styles.Title}>
      <svg
        width="28vw"
        height="11vw"
        viewBox="0 0 416 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#a)" fill="currentColor">
          <mask
            id="b"
            maskUnits="userSpaceOnUse"
            x="4"
            y="0"
            width="244"
            height="63"
          >
            <path fill="currentColor" d="M4 0h244v63H4z" />
            <path d="M48.509 42.466q-1.054 4.218-2.813 7.646-1.758 3.428-4.306 5.845-2.505 2.417-5.889 3.735-3.34 1.32-7.69 1.319-6.021 0-10.196-2.461-4.174-2.505-6.855-6.636-2.637-4.175-3.823-9.492-1.143-5.361-1.143-11.118t1.143-11.118q1.185-5.362 3.779-9.449 2.637-4.086 6.68-6.548 4.042-2.504 9.887-2.504 1.89 0 3.823.483t3.604 1.494q1.67.967 2.9 2.417 1.275 1.45 1.802 3.34V2.651h8.218v21.71h-8.218q0-2.682-.66-5.274-.659-2.636-2.108-4.658a11.6 11.6 0 0 0-3.648-3.296Q30.8 9.858 27.81 9.858q-3.867 0-6.328 1.89-2.46 1.89-3.955 4.966-1.494 3.075-2.109 6.9a52 52 0 0 0-.571 7.69q0 3.867.571 7.734.615 3.867 2.065 6.943 1.45 3.033 3.956 4.922 2.504 1.89 6.372 1.89 5.58 0 8.569-3.56 3.032-3.56 4.834-9.58zm49.306-2.9q0 4.79-1.538 8.7-1.494 3.912-4.35 6.768-2.812 2.813-6.768 4.395-3.954 1.582-8.833 1.582-4.79 0-8.745-1.582t-6.812-4.395q-2.812-2.856-4.35-6.767-1.494-3.912-1.494-8.702 0-4.657 1.494-8.613 1.538-3.999 4.35-6.855 2.857-2.9 6.812-4.439 3.956-1.582 8.745-1.582 4.879 0 8.833 1.582 3.956 1.538 6.768 4.439 2.856 2.857 4.35 6.855 1.538 3.956 1.538 8.613m-9.052 0q0-2.77-.88-5.23-.834-2.504-2.46-4.263-1.627-1.758-3.955-2.768-2.285-1.055-5.142-1.055-2.9 0-5.185 1.055-2.286 1.01-3.868 2.768t-2.46 4.263q-.836 2.46-.836 5.23 0 2.899.836 5.273.878 2.373 2.46 4.175 1.582 1.8 3.868 2.812 2.285.967 5.185.967 2.857 0 5.142-.967 2.328-1.01 3.955-2.812a12.2 12.2 0 0 0 2.46-4.175q.88-2.373.88-5.274M139.388 60h-27.51v-8.174h8.965V10.87h-8.965V2.651h18.061v49.175h9.449zm56.689-20.435q0 4.79-1.538 8.702-1.494 3.91-4.351 6.767-2.812 2.813-6.767 4.395t-8.833 1.582q-4.79 0-8.745-1.582t-6.812-4.395q-2.812-2.856-4.35-6.767-1.494-3.912-1.494-8.702 0-4.657 1.494-8.613 1.537-3.999 4.35-6.855 2.857-2.9 6.812-4.439 3.955-1.582 8.745-1.582 4.878 0 8.833 1.582 3.955 1.538 6.767 4.439 2.857 2.857 4.351 6.855 1.538 3.956 1.538 8.613m-9.053 0q0-2.767-.878-5.23-.835-2.504-2.461-4.262t-3.956-2.768q-2.285-1.055-5.141-1.055-2.9 0-5.186 1.055-2.285 1.01-3.867 2.768t-2.461 4.263q-.835 2.46-.835 5.23 0 2.899.835 5.273.879 2.373 2.461 4.175 1.583 1.8 3.867 2.812 2.286.967 5.186.967 2.856 0 5.141-.967 2.33-1.01 3.956-2.812a12.2 12.2 0 0 0 2.461-4.175q.878-2.373.878-5.274m56.119-10.81a15.7 15.7 0 0 0-3.34-1.187q-1.671-.44-3.867-.44-3.033 0-5.713.924-2.637.88-4.571 2.68-1.933 1.802-3.032 4.527-1.055 2.68-1.055 6.372v10.195h9.185V60h-27.554v-8.174h9.273V27.261h-9.273v-8.218h18.369v10.283q2.242-6.152 6.592-8.701 4.395-2.55 10.415-2.549 1.89 0 3.955.396a15 15 0 0 1 4.043 1.406z" />
          </mask>
          <path d="M48.509 42.466q-1.054 4.218-2.813 7.646-1.758 3.428-4.306 5.845-2.505 2.417-5.889 3.735-3.34 1.32-7.69 1.319-6.021 0-10.196-2.461-4.174-2.505-6.855-6.636-2.637-4.175-3.823-9.492-1.143-5.361-1.143-11.118t1.143-11.118q1.185-5.362 3.779-9.449 2.637-4.086 6.68-6.548 4.042-2.504 9.887-2.504 1.89 0 3.823.483t3.604 1.494q1.67.967 2.9 2.417 1.275 1.45 1.802 3.34V2.651h8.218v21.71h-8.218q0-2.682-.66-5.274-.659-2.636-2.108-4.658a11.6 11.6 0 0 0-3.648-3.296Q30.8 9.858 27.81 9.858q-3.867 0-6.328 1.89-2.46 1.89-3.955 4.966-1.494 3.075-2.109 6.9a52 52 0 0 0-.571 7.69q0 3.867.571 7.734.615 3.867 2.065 6.943 1.45 3.033 3.956 4.922 2.504 1.89 6.372 1.89 5.58 0 8.569-3.56 3.032-3.56 4.834-9.58zm49.306-2.9q0 4.79-1.538 8.7-1.494 3.912-4.35 6.768-2.812 2.813-6.768 4.395-3.954 1.582-8.833 1.582-4.79 0-8.745-1.582t-6.812-4.395q-2.812-2.856-4.35-6.767-1.494-3.912-1.494-8.702 0-4.657 1.494-8.613 1.538-3.999 4.35-6.855 2.857-2.9 6.812-4.439 3.956-1.582 8.745-1.582 4.879 0 8.833 1.582 3.956 1.538 6.768 4.439 2.856 2.857 4.35 6.855 1.538 3.956 1.538 8.613m-9.052 0q0-2.77-.88-5.23-.834-2.504-2.46-4.263-1.627-1.758-3.955-2.768-2.285-1.055-5.142-1.055-2.9 0-5.185 1.055-2.286 1.01-3.868 2.768t-2.46 4.263q-.836 2.46-.836 5.23 0 2.899.836 5.273.878 2.373 2.46 4.175 1.582 1.8 3.868 2.812 2.285.967 5.185.967 2.857 0 5.142-.967 2.328-1.01 3.955-2.812a12.2 12.2 0 0 0 2.46-4.175q.88-2.373.88-5.274M139.388 60h-27.51v-8.174h8.965V10.87h-8.965V2.651h18.061v49.175h9.449zm56.689-20.435q0 4.79-1.538 8.702-1.494 3.91-4.351 6.767-2.812 2.813-6.767 4.395t-8.833 1.582q-4.79 0-8.745-1.582t-6.812-4.395q-2.812-2.856-4.35-6.767-1.494-3.912-1.494-8.702 0-4.657 1.494-8.613 1.537-3.999 4.35-6.855 2.857-2.9 6.812-4.439 3.955-1.582 8.745-1.582 4.878 0 8.833 1.582 3.955 1.538 6.767 4.439 2.857 2.857 4.351 6.855 1.538 3.956 1.538 8.613m-9.053 0q0-2.767-.878-5.23-.835-2.504-2.461-4.262t-3.956-2.768q-2.285-1.055-5.141-1.055-2.9 0-5.186 1.055-2.285 1.01-3.867 2.768t-2.461 4.263q-.835 2.46-.835 5.23 0 2.899.835 5.273.879 2.373 2.461 4.175 1.583 1.8 3.867 2.812 2.286.967 5.186.967 2.856 0 5.141-.967 2.33-1.01 3.956-2.812a12.2 12.2 0 0 0 2.461-4.175q.878-2.373.878-5.274m56.119-10.81a15.7 15.7 0 0 0-3.34-1.187q-1.671-.44-3.867-.44-3.033 0-5.713.924-2.637.88-4.571 2.68-1.933 1.802-3.032 4.527-1.055 2.68-1.055 6.372v10.195h9.185V60h-27.554v-8.174h9.273V27.261h-9.273v-8.218h18.369v10.283q2.242-6.152 6.592-8.701 4.395-2.55 10.415-2.549 1.89 0 3.955.396a15 15 0 0 1 4.043 1.406z" />
          <path
            d="m48.509 42.466.97.242.214-.857-.825-.318zm-7.12 13.491-.687-.726-.007.006zm-5.888 3.735-.363-.931-.004.001zM17.615 58.55l-.514.857.006.004zm-6.855-6.636-.846.534.007.01zm-3.823-9.492-.979.208.003.01zm0-22.236-.977-.216-.002.007zm3.779-9.449-.84-.542-.005.007zm6.68-6.548.52.855.006-.004zm17.314-.527-.518.856.008.005.009.005zm2.9 2.417-.762.647.005.007.006.006zm1.802 3.34-.963.269 1.963-.269zm0-6.768v-1h-1v1zm8.218 0h1v-1h-1zm0 21.71v1h1v-1zm-8.218 0h-1v1h1zm-.66-5.274-.97.242.002.004zm-23.334 4.526-.987-.159-.002.011zm0 15.425-.99.146.002.011zm2.065 6.943-.904.427.002.005zm18.897 3.252-.761-.648-.005.005zm4.834-9.58.36-.933-1.008-.388-.31 1.035zm6.325 2.57q-1.032 4.12-2.733 7.433l1.78.913q1.816-3.544 2.893-7.86zm-2.733 7.433c-1.125 2.194-2.495 4.049-4.104 5.575l1.376 1.452c1.788-1.697 3.29-3.738 4.508-6.114zm-4.11 5.581c-1.571 1.516-3.42 2.69-5.558 3.524l.726 1.863q3.563-1.387 6.22-3.947zm-5.562 3.525c-2.088.824-4.523 1.249-7.323 1.249v2c3 0 5.692-.455 8.057-1.389zm-7.323 1.249c-3.878 0-7.092-.792-9.688-2.323l-1.016 1.723c2.97 1.751 6.554 2.6 10.704 2.6zm-9.681-2.319q-3.975-2.383-6.531-6.322L9.92 52.458c1.869 2.88 4.264 5.2 7.18 6.95zm-6.525-6.312c-1.69-2.677-2.924-5.732-3.692-9.176l-1.952.436c.813 3.645 2.128 6.918 3.953 9.808zm-3.69-9.167q-1.12-5.253-1.121-10.91h-2q0 5.858 1.164 11.327zm-1.121-10.91q0-5.655 1.12-10.909l-1.956-.417q-1.165 5.47-1.164 11.327zm1.119-10.901c.77-3.476 1.989-6.515 3.647-9.129l-1.689-1.071c-1.798 2.835-3.098 6.095-3.91 9.768zm3.643-9.123c1.678-2.6 3.797-4.675 6.36-6.235l-1.04-1.709c-2.828 1.722-5.163 4.012-7 6.86zm6.366-6.24c2.505-1.551 5.608-2.354 9.361-2.354v-2c-4.04 0-7.528.866-10.414 2.654zm9.361-2.354q1.76 0 3.58.453l.486-1.94a16.7 16.7 0 0 0-4.066-.513zm3.58.453q1.791.449 3.33 1.38l1.035-1.711a14 14 0 0 0-3.879-1.61zm3.346 1.39a10 10 0 0 1 2.639 2.198l1.525-1.294a12 12 0 0 0-3.162-2.635zm2.65 2.211a7.4 7.4 0 0 1 1.59 2.949l1.926-.538a9.4 9.4 0 0 0-2.014-3.731zm3.553 2.68V2.651h-2V9.42zm-1-5.768h8.218v-2h-8.218zm7.218-1v21.71h2V2.65zm1 20.71h-8.218v2h8.218zm-7.218 1q0-2.806-.69-5.52l-1.938.492q.628 2.471.628 5.027zm-.689-5.517c-.467-1.869-1.22-3.539-2.267-4.998l-1.625 1.166c.887 1.236 1.54 2.67 1.952 4.317zm-2.267-4.998a12.6 12.6 0 0 0-3.958-3.578l-1.004 1.73a10.6 10.6 0 0 1 3.337 3.014zm-3.958-3.578c-1.642-.953-3.55-1.41-5.687-1.41v2c1.847 0 3.396.393 4.683 1.14zm-5.687-1.41c-2.744 0-5.083.673-6.938 2.097l1.218 1.586c1.427-1.095 3.306-1.683 5.72-1.683zm-6.938 2.097c-1.776 1.364-3.188 3.146-4.245 5.322l1.799.874c.935-1.926 2.16-3.454 3.664-4.61zm-4.245 5.322c-1.044 2.15-1.774 4.545-2.197 7.177l1.974.318c.397-2.465 1.074-4.67 2.022-6.621zm-2.2 7.188a53 53 0 0 0-.581 7.839h2q0-3.793.56-7.543zm-.581 7.839q0 3.94.582 7.88l1.978-.292q-.56-3.795-.56-7.588zm.583 7.891c.423 2.658 1.136 5.065 2.149 7.213l1.809-.853c-.921-1.954-1.585-4.175-1.983-6.674zm2.151 7.218c1.031 2.155 2.448 3.926 4.255 5.289l1.205-1.597c-1.533-1.156-2.753-2.667-3.655-4.555zm4.255 5.289c1.88 1.418 4.23 2.091 6.975 2.091v-2c-2.413 0-4.31-.587-5.77-1.688zm6.975 2.091c3.95 0 7.114-1.272 9.335-3.917l-1.532-1.286c-1.764 2.101-4.313 3.203-7.803 3.203zm9.33-3.911c2.137-2.508 3.803-5.839 5.03-9.942l-1.915-.573c-1.175 3.924-2.731 6.98-4.637 9.218zm3.713-9.296L48.15 43.4l.72-1.866-7.295-2.813zm55.423 7.68-.93-.365-.004.009zM60.77 55.035l-.713.702.005.005.006.006zm-4.351-6.767-.934.356.003.01zm0-17.315-.933-.359-.002.006zm4.35-6.855-.712-.702zm6.812-4.439.362.932.01-.003zm17.578 0-.371.929.009.003zm6.768 4.439-.718.696.005.005.006.006zm4.35 6.855-.936.35.004.013zm-8.393 3.384-.949.316.004.01.003.01zm-6.416-7.031-.42.908.011.005.01.004zm-10.327 0 .404.914.007-.003.008-.003zm-6.329 7.03-.943-.33-.004.01zm0 10.504-.943.332.003.008.003.007zm6.329 6.987-.405.915.007.003.008.003zm10.327 0 .39.921.008-.004zm6.416-6.987-.938-.347-.003.007-.002.008zm8.931-5.274c0 3.086-.495 5.86-1.468 8.336l1.861.732c1.077-2.74 1.607-5.766 1.607-9.068zm-1.472 8.345c-.948 2.48-2.322 4.616-4.123 6.417l1.414 1.414c2.007-2.007 3.533-4.384 4.578-7.117zm-4.123 6.417c-1.773 1.773-3.912 3.165-6.432 4.173l.743 1.857c2.753-1.101 5.125-2.638 7.103-4.616zM84.788 58.5c-2.503 1.001-5.319 1.51-8.462 1.51v2c3.361 0 6.434-.544 9.205-1.653zm-8.462 1.51c-3.082 0-5.869-.508-8.374-1.51l-.742 1.857c2.768 1.108 5.811 1.654 9.116 1.654zm-8.374-1.51c-2.52-1.008-4.677-2.402-6.48-4.178l-1.404 1.425c2.005 1.974 4.39 3.51 7.142 4.61zm-6.47-4.167c-1.776-1.804-3.154-3.944-4.132-6.432l-1.862.732c1.073 2.726 2.595 5.098 4.569 7.103zm-4.129-6.423c-.947-2.479-1.428-5.256-1.428-8.345h-2c0 3.298.514 6.322 1.56 9.059zm-1.428-8.345c0-2.997.48-5.747 1.43-8.26l-1.871-.706c-1.043 2.76-1.56 5.753-1.56 8.966zm1.427-8.254c.98-2.547 2.358-4.713 4.13-6.513l-1.425-1.403c-1.978 2.009-3.5 4.413-4.571 7.198zm4.13-6.513c1.801-1.828 3.95-3.231 6.462-4.208l-.725-1.864c-2.763 1.075-5.154 2.63-7.162 4.669zm6.47-4.211c2.505-1.002 5.292-1.51 8.374-1.51v-2c-3.305 0-6.348.545-9.116 1.653zm8.374-1.51c3.143 0 5.96.509 8.462 1.51l.743-1.857c-2.771-1.109-5.844-1.654-9.205-1.654zm8.47 1.513c2.51.976 4.643 2.378 6.413 4.203l1.436-1.392c-1.98-2.043-4.36-3.6-7.123-4.675zm6.424 4.214c1.797 1.797 3.172 3.959 4.12 6.498l1.874-.7c-1.043-2.792-2.569-5.201-4.58-7.212zm4.125 6.51c.977 2.511 1.47 5.258 1.47 8.251h2c0-3.217-.531-6.212-1.606-8.975zm-5.582 8.251q.002-2.931-.937-5.565l-1.884.672q.819 2.289.82 4.893zm-.93-5.545c-.597-1.791-1.486-3.34-2.676-4.626l-1.468 1.358c.978 1.058 1.73 2.351 2.246 3.9zm-2.676-4.626c-1.184-1.28-2.619-2.281-4.291-3.007l-.796 1.835c1.433.622 2.635 1.466 3.619 2.53zm-4.27-2.997c-1.672-.772-3.531-1.147-5.56-1.147v2c1.778 0 3.346.328 4.722.963zm-5.56-1.147c-2.057 0-3.932.374-5.605 1.147l.838 1.816c1.373-.634 2.955-.963 4.766-.963zm-5.59 1.14c-1.646.728-3.052 1.732-4.207 3.014l1.487 1.338c.955-1.061 2.126-1.903 3.528-2.523zm-4.207 3.014c-1.153 1.282-2.037 2.821-2.661 4.6l1.887.663c.548-1.56 1.305-2.863 2.26-3.925zm-2.665 4.61q-.889 2.629-.888 5.551h2q.002-2.613.782-4.908zm-.888 5.551c0 2.03.293 3.902.892 5.606l1.887-.664c-.514-1.46-.778-3.104-.778-4.942zm.898 5.621c.626 1.69 1.507 3.19 2.647 4.487l1.503-1.32q-1.456-1.653-2.275-3.861zm2.647 4.487c1.154 1.315 2.564 2.338 4.214 3.068l.81-1.83c-1.397-.617-2.566-1.47-3.521-2.557zm4.229 3.074c1.666.705 3.53 1.046 5.575 1.046v-2c-1.822 0-3.415-.303-4.796-.888zm5.575 1.046c2.018 0 3.868-.342 5.531-1.046l-.779-1.842c-1.383.585-2.961.888-4.752.888zm5.54-1.05c1.677-.727 3.115-1.747 4.3-3.06l-1.486-1.34c-.983 1.09-2.183 1.946-3.61 2.566zm4.3-3.06a13.2 13.2 0 0 0 2.661-4.512l-1.886-.664a11.2 11.2 0 0 1-2.26 3.837zm2.656-4.497c.632-1.708.94-3.586.94-5.62h-2c0 1.832-.277 3.47-.816 4.926zM139.388 60v1h1v-1zm-27.51 0h-1v1h1zm0-8.174v-1h-1v1zm8.965 0v1h1v-1zm0-40.957h1v-1h-1zm-8.965 0h-1v1h1zm0-8.218v-1h-1v1zm18.061 0h1v-1h-1zm0 49.175h-1v1h1zm9.449 0h1v-1h-1zm0 7.174h-27.51v2h27.51zm-26.51 1v-8.174h-2V60zm-1-7.174h8.965v-2h-8.965zm9.965-1V10.87h-2v40.957zm-1-41.957h-8.965v2h8.965zm-7.965 1V2.651h-2v8.218zm-1-7.218h18.061v-2h-18.061zm17.061-1v49.175h2V2.651zm1 50.175h9.449v-2h-9.449zm8.449-1V60h2v-8.174zm56.151-3.56-.931-.365-.003.009zm-35.508 6.768-.712.702.005.005.006.006zm-4.35-6.767-.935.356.004.01zm0-17.315-.934-.359-.002.006zm4.35-6.855-.712-.702zm6.812-4.439.362.932.009-.003zm17.578 0-.372.929.009.003zm6.767 4.439-.717.696.005.005.005.006zm4.351 6.855-.937.35.005.013zm-8.393 3.384-.949.316.003.01.004.01zm-6.417-7.031-.419.908.011.005.01.004zm-10.327 0 .405.914.007-.003.007-.003zm-6.328 7.03-.943-.33-.004.01zm0 10.504-.943.332.003.008.002.007zm6.328 6.987-.404.915.007.003.008.003zm10.327 0 .39.921.009-.004zm6.417-6.987-.938-.347-.003.007-.003.008zm8.931-5.274c0 3.086-.495 5.86-1.469 8.336l1.862.732c1.077-2.74 1.607-5.766 1.607-9.068zm-1.472 8.345c-.948 2.48-2.322 4.616-4.124 6.417l1.415 1.414c2.007-2.007 3.533-4.384 4.577-7.117zm-4.124 6.417c-1.772 1.773-3.911 3.165-6.431 4.173l.742 1.857c2.754-1.101 5.126-2.638 7.104-4.616zM183.05 58.5c-2.503 1.001-5.319 1.51-8.462 1.51v2c3.361 0 6.434-.544 9.204-1.653zm-8.462 1.51c-3.082 0-5.869-.508-8.374-1.51l-.743 1.857c2.769 1.108 5.812 1.654 9.117 1.654zm-8.374-1.51c-2.521-1.008-4.677-2.402-6.481-4.178l-1.403 1.425c2.004 1.974 4.389 3.51 7.141 4.61zm-6.47-4.167c-1.776-1.804-3.154-3.944-4.133-6.432l-1.861.732c1.072 2.726 2.595 5.098 4.569 7.103zm-4.129-6.423c-.947-2.479-1.428-5.256-1.428-8.345h-2c0 3.298.514 6.322 1.56 9.059zm-1.428-8.345c0-2.997.48-5.747 1.429-8.26l-1.871-.706c-1.043 2.76-1.558 5.753-1.558 8.966zm1.427-8.254c.98-2.547 2.358-4.713 4.13-6.513l-1.425-1.403c-1.978 2.009-3.5 4.413-4.572 7.198zm4.13-6.513c1.801-1.828 3.95-3.231 6.461-4.208l-.725-1.864c-2.762 1.075-5.154 2.63-7.161 4.669zm6.47-4.211c2.505-1.002 5.292-1.51 8.374-1.51v-2c-3.305 0-6.348.545-9.117 1.653zm8.374-1.51c3.143 0 5.959.509 8.462 1.51l.742-1.857c-2.77-1.109-5.843-1.654-9.204-1.654zm8.47 1.513c2.51.976 4.643 2.378 6.413 4.203l1.435-1.392c-1.98-2.043-4.359-3.6-7.123-4.675zm6.423 4.214c1.798 1.797 3.172 3.959 4.121 6.498l1.874-.7c-1.043-2.792-2.569-5.201-4.58-7.212zm4.126 6.51c.976 2.511 1.47 5.258 1.47 8.251h2c0-3.217-.531-6.212-1.606-8.975zm-5.583 8.251q.002-2.931-.937-5.565l-1.883.672q.819 2.289.82 4.893zm-.93-5.545c-.597-1.791-1.485-3.34-2.675-4.626l-1.469 1.358c.978 1.058 1.73 2.351 2.247 3.9zm-2.675-4.626c-1.184-1.28-2.619-2.281-4.291-3.007l-.797 1.835c1.434.622 2.635 1.466 3.619 2.53zm-4.27-2.997c-1.672-.772-3.532-1.147-5.561-1.147v2c1.779 0 3.347.328 4.722.963zm-5.561-1.147c-2.056 0-3.931.374-5.605 1.147l.838 1.816c1.374-.634 2.956-.963 4.767-.963zm-5.59 1.14c-1.645.728-3.052 1.732-4.206 3.014l1.486 1.338c.955-1.061 2.127-1.903 3.529-2.523zm-4.206 3.014c-1.153 1.282-2.037 2.821-2.661 4.6l1.887.663c.547-1.56 1.304-2.863 2.26-3.925zm-2.665 4.61q-.89 2.629-.888 5.551h2q.002-2.613.782-4.908zm-.888 5.551c0 2.03.292 3.902.892 5.606l1.887-.664c-.514-1.46-.779-3.104-.779-4.942zm.897 5.621c.626 1.69 1.508 3.19 2.648 4.487l1.503-1.32q-1.456-1.653-2.275-3.861zm2.648 4.487c1.154 1.315 2.563 2.338 4.214 3.068l.809-1.83c-1.397-.617-2.566-1.47-3.52-2.557zm4.229 3.074c1.665.705 3.53 1.046 5.575 1.046v-2c-1.822 0-3.415-.303-4.796-.888zm5.575 1.046c2.018 0 3.867-.342 5.531-1.046l-.779-1.842c-1.383.585-2.962.888-4.752.888zm5.54-1.05c1.677-.727 3.115-1.747 4.299-3.06l-1.485-1.34c-.984 1.09-2.183 1.946-3.611 2.566zm4.299-3.06a13.2 13.2 0 0 0 2.662-4.512l-1.887-.664a11.2 11.2 0 0 1-2.26 3.837zm2.656-4.497c.633-1.708.941-3.586.941-5.62h-2c0 1.832-.277 3.47-.816 4.926zm56.06-16.431-.438.9.979.475.391-1.015zm-3.34-1.187-.255.967.015.004.015.004zm-9.58.484.316.948.009-.003zm-7.603 7.207-.927-.374-.003.008zm-1.055 16.567h-1v1h1zm9.185 0h1v-1h-1zm0 8.174v1h1v-1zm-27.554 0h-1v1h1zm0-8.174v-1h-1v1zm9.273 0v1h1v-1zm0-24.565h1v-1h-1zm-9.273 0h-1v1h1zm0-8.218v-1h-1v1zm18.369 0h1v-1h-1zm0 10.283h-1l1.94.343zm6.592-8.701-.501-.865-.004.002zm18.413-.747.933.36.325-.84-.803-.41zm-2.99 7.978a16.7 16.7 0 0 0-3.552-1.262l-.45 1.949q1.6.369 3.127 1.111zm-3.523-1.255c-1.215-.32-2.593-.472-4.121-.472v2c1.401 0 2.601.14 3.612.406zm-4.121-.472q-3.189-.002-6.039.977l.651 1.891q2.511-.866 5.388-.868zm-6.03.974c-1.886.629-3.536 1.594-4.935 2.898l1.363 1.463c1.179-1.098 2.576-1.92 4.205-2.464zm-4.935 2.898c-1.408 1.311-2.497 2.947-3.278 4.884l1.855.748c.683-1.696 1.616-3.078 2.786-4.169zm-3.281 4.892c-.76 1.931-1.125 4.185-1.125 6.738h2c0-2.37.339-4.363.986-6.006zm-1.125 6.738v10.195h2V41.631zm1 11.195h9.185v-2h-9.185zm8.185-1V60h2v-8.174zm1 7.174h-27.554v2h27.554zm-26.554 1v-8.174h-2V60zm-1-7.174h9.273v-2h-9.273zm10.273-1V27.261h-2v24.565zm-1-25.565h-9.273v2h9.273zm-8.273 1v-8.218h-2v8.218zm-1-7.218h18.369v-2h-18.369zm17.369-1v10.283h2V19.043zm1.94 10.626c1.439-3.95 3.512-6.631 6.158-8.181l-1.011-1.726c-3.155 1.848-5.476 4.968-7.026 9.222zm6.154-8.179c2.751-1.596 6.043-2.414 9.913-2.414v-2c-4.157 0-7.808.881-10.916 2.684zm9.913-2.414q1.784 0 3.767.378l.376-1.965a22 22 0 0 0-4.143-.413zm3.767.378q1.918.366 3.776 1.314l.91-1.78a16 16 0 0 0-4.31-1.498zm3.298.064-3.427 8.877 1.865.72 3.428-8.877z"
            mask="url(#b)"
          />
        </g>
        <g filter="url(#c)" fill="currentColor">
          <mask
            id="d"
            maskUnits="userSpaceOnUse"
            x="249"
            y="51"
            width="163"
            height="51"
          >
            <path fill="currentColor" d="M249 51h163v51H249z" />
            <path d="M281.326 100h-30.505l10.107-47.79h30.542l-.915 4.284h-25.489l-3.662 17.102h18.824l-.916 4.285h-18.823l-3.736 17.834h25.489zm10.51-9.228q.66-3.223 2.71-5.384 2.088-2.197 4.981-3.442 2.893-1.282 6.409-1.831a42.7 42.7 0 0 1 7.031-.586q1.355 0 2.417.036a48 48 0 0 1 3.918.293q.952.111 2.161.257l.513-2.454q.55-2.49-.22-4.101-.732-1.612-2.124-2.527a8.7 8.7 0 0 0-3.04-1.319q-1.647-.403-2.856-.403-3.846 0-7.251 1.026a34 34 0 0 0-6.555 2.746l-1.502-3.772q3.516-1.867 7.617-3.039 4.102-1.209 8.68-1.209 2.746 0 5.31.733 2.563.696 4.358 2.197 1.794 1.465 2.526 3.882.77 2.417.074 5.786L322.269 100h-5.018l1.209-5.713a24 24 0 0 1-3.662 2.893 23 23 0 0 1-3.882 2.051 24.3 24.3 0 0 1-3.955 1.172q-1.94.44-3.589.439-6.738 0-9.668-2.6t-1.868-7.47m12.452 5.786q3.149 0 5.859-.916 2.747-.952 4.761-2.344 2.05-1.39 3.369-2.966 1.319-1.575 1.611-2.856l.659-3.223a34 34 0 0 0-4.651-.403 241 241 0 0 0-3.881-.036q-2.71 0-5.31.366-2.563.366-4.615 1.208-2.013.806-3.442 2.124-1.428 1.32-1.794 3.26-.513 2.16 1.208 3.991 1.721 1.795 6.226 1.795m61.779-6.006q-.586 3.003-2.526 4.98-1.905 1.978-4.541 3.15-2.601 1.17-5.64 1.648a35 35 0 0 1-5.823.512 29.8 29.8 0 0 1-8.972-1.355q-4.285-1.355-7.214-3.552l3.149-4.321q3.296 2.38 6.665 3.662 3.369 1.281 7.288 1.282 11.316 0 12.597-5.86.294-1.427-.476-2.307-.732-.916-2.197-1.465-1.465-.585-3.406-.915-1.94-.33-4.138-.623-2.746-.403-5.457-.952-2.709-.55-4.797-1.648t-3.113-2.93q-1.025-1.83-.403-4.834.587-2.564 2.271-4.43 1.684-1.868 4.102-3.113 2.453-1.245 5.529-1.832a33 33 0 0 1 6.226-.585q4.504 0 7.837 1.062 3.333 1.025 5.749 2.966l-2.856 3.918q-2.454-2.051-5.31-2.856-2.856-.843-6.372-.843-1.575 0-3.552.293-1.942.257-3.736.953-1.794.66-3.149 1.757-1.356 1.063-1.721 2.71-.293 1.43.439 2.308.77.842 2.197 1.428 1.465.549 3.406.879 1.977.33 4.138.622 2.71.403 5.457.952 2.746.55 4.834 1.612t3.149 2.893q1.062 1.83.366 4.834m14.026-5.86q-.586 5.421 2.088 8.643 2.71 3.222 8.203 3.223 3.808 0 7.141-1.575t5.383-3.919l2.967 2.417q-3.297 3.59-7.288 5.494-3.955 1.867-9.119 1.867-3.991 0-6.994-1.318-2.967-1.319-4.908-3.662-1.904-2.38-2.526-5.64-.66-3.26.256-7.25.805-3.884 2.673-7.142 1.905-3.296 4.651-5.676a20.5 20.5 0 0 1 6.299-3.736q3.553-1.355 7.507-1.355 4.359 0 7.288 1.465t4.578 4.065q1.647 2.564 1.904 6.153t-.623 7.946zm25.049-4.284q.366-5.604-2.307-8.35-2.637-2.746-7.361-2.747-2.417.001-4.651.806a14.1 14.1 0 0 0-4.065 2.234q-1.867 1.465-3.369 3.552a16 16 0 0 0-2.307 4.505z" />
          </mask>
          <path
            d="M281.326 100h-30.505l10.107-47.79h30.542l-.915 4.284h-25.489l-3.662 17.102h18.824l-.916 4.285h-18.823l-3.736 17.834h25.489zm10.51-9.228q.66-3.223 2.71-5.384 2.088-2.197 4.981-3.442 2.893-1.282 6.409-1.831a42.7 42.7 0 0 1 7.031-.586q1.355 0 2.417.036a48 48 0 0 1 3.918.293q.952.111 2.161.257l.513-2.454q.55-2.49-.22-4.101-.732-1.612-2.124-2.527a8.7 8.7 0 0 0-3.04-1.319q-1.647-.403-2.856-.403-3.846 0-7.251 1.026a34 34 0 0 0-6.555 2.746l-1.502-3.772q3.516-1.867 7.617-3.039 4.102-1.209 8.68-1.209 2.746 0 5.31.733 2.563.696 4.358 2.197 1.794 1.465 2.526 3.882.77 2.417.074 5.786L322.269 100h-5.018l1.209-5.713a24 24 0 0 1-3.662 2.893 23 23 0 0 1-3.882 2.051 24.3 24.3 0 0 1-3.955 1.172q-1.94.44-3.589.439-6.738 0-9.668-2.6t-1.868-7.47m12.452 5.786q3.149 0 5.859-.916 2.747-.952 4.761-2.344 2.05-1.39 3.369-2.966 1.319-1.575 1.611-2.856l.659-3.223a34 34 0 0 0-4.651-.403 241 241 0 0 0-3.881-.036q-2.71 0-5.31.366-2.563.366-4.615 1.208-2.013.806-3.442 2.124-1.428 1.32-1.794 3.26-.513 2.16 1.208 3.991 1.721 1.795 6.226 1.795m61.779-6.006q-.586 3.003-2.526 4.98-1.905 1.978-4.541 3.15-2.601 1.17-5.64 1.648a35 35 0 0 1-5.823.512 29.8 29.8 0 0 1-8.972-1.355q-4.285-1.355-7.214-3.552l3.149-4.321q3.296 2.38 6.665 3.662 3.369 1.281 7.288 1.282 11.316 0 12.597-5.86.294-1.427-.476-2.307-.732-.916-2.197-1.465-1.465-.585-3.406-.915-1.94-.33-4.138-.623-2.746-.403-5.457-.952-2.709-.55-4.797-1.648t-3.113-2.93q-1.025-1.83-.403-4.834.587-2.564 2.271-4.43 1.684-1.868 4.102-3.113 2.453-1.245 5.529-1.832a33 33 0 0 1 6.226-.585q4.504 0 7.837 1.062 3.333 1.025 5.749 2.966l-2.856 3.918q-2.454-2.051-5.31-2.856-2.856-.843-6.372-.843-1.575 0-3.552.293-1.942.257-3.736.953-1.794.66-3.149 1.757-1.356 1.063-1.721 2.71-.293 1.43.439 2.308.77.842 2.197 1.428 1.465.549 3.406.879 1.977.33 4.138.622 2.71.403 5.457.952 2.746.55 4.834 1.612t3.149 2.893q1.062 1.83.366 4.834m14.026-5.86q-.586 5.421 2.088 8.643 2.71 3.222 8.203 3.223 3.808 0 7.141-1.575t5.383-3.919l2.967 2.417q-3.297 3.59-7.288 5.494-3.955 1.867-9.119 1.867-3.991 0-6.994-1.318-2.967-1.319-4.908-3.662-1.904-2.38-2.526-5.64-.66-3.26.256-7.25.805-3.884 2.673-7.142 1.905-3.296 4.651-5.676a20.5 20.5 0 0 1 6.299-3.736q3.553-1.355 7.507-1.355 4.359 0 7.288 1.465t4.578 4.065q1.647 2.564 1.904 6.153t-.623 7.946zm25.049-4.284q.366-5.604-2.307-8.35-2.637-2.746-7.361-2.747-2.417.001-4.651.806a14.1 14.1 0 0 0-4.065 2.234q-1.867 1.465-3.369 3.552a16 16 0 0 0-2.307 4.505z"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
          />
        </g>
        <circle cx="76" cy="39" r="14" fill="url(#e)" />
        <circle cx="76" cy="39" r="14" fill="url(#f)" />
        <path
          d="m79.234 34.1 8.036 13.419M72.766 34.1h16.072m-19.306 5.4 8.036-13.419M72.766 44.9 64.73 31.481M79.234 44.9H63.162m19.306-5.4-8.036 13.419M90 39.5C90 46.956 83.732 53 76 53s-14-6.044-14-13.5S68.268 26 76 26s14 6.044 14 13.5"
          stroke="#000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle cx="174.5" cy="39.5" r="14.5" fill="url(#g)" />
        <circle cx="174.5" cy="39.5" r="14.5" fill="url(#h)" />
        <path
          d="m177.85 33.7 8.322 14.413M171.15 33.7h16.647m-19.996 5.8 8.323-14.413M171.15 45.3l-8.322-14.413M177.85 45.3h-16.647m19.996-5.8-8.323 14.413M189 39.5c0 8.008-6.492 14.5-14.5 14.5S160 47.508 160 39.5 166.492 25 174.5 25 189 31.492 189 39.5"
          stroke="#000"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <radialGradient
            id="e"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 -14 14 0 76 39)"
          >
            <stop stop-color="#E7E00" />
            <stop offset=".124" stop-color="#EEAA3C" />
            <stop offset=".249" stop-color="#E8403B" />
            <stop offset=".366" stop-color="#B33ED5" />
            <stop offset=".506" stop-color="#694AE8" />
            <stop offset=".643" stop-color="#3CCAE7" />
            <stop offset=".749" stop-color="#3CE885" />
            <stop offset=".87" stop-color="#89E743" />
            <stop offset="1" stop-color="#E7E040" />
          </radialGradient>
          <radialGradient
            id="f"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0 14 -14 0 76 39)"
          >
            <stop stop-color="#E4E4E4" />
            <stop offset=".88" stop-color="#E4E4E4" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="g"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-90 107 -67.5)scale(14.5)"
          >
            <stop stop-color="#E7E040" />
            <stop offset=".124" stop-color="#EEAA3C" />
            <stop offset=".249" stop-color="#E8403B" />
            <stop offset=".366" stop-color="#B33ED5" />
            <stop offset=".506" stop-color="#694AE8" />
            <stop offset=".643" stop-color="#3CCAE7" />
            <stop offset=".749" stop-color="#3CE885" />
            <stop offset=".87" stop-color="#89E743" />
            <stop offset="1" stop-color="#E7E040" />
          </radialGradient>
          <radialGradient
            id="h"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 67.5 107)scale(14.5)"
          >
            <stop stop-color="#E4E4E4" />
            <stop offset=".88" stop-color="#E4E4E4" stop-opacity="0" />
          </radialGradient>
          <filter
            id="a"
            x=".794"
            y=".685"
            width="251.034"
            height="69.326"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="c"
            x="245.587"
            y="51.209"
            width="169.667"
            height="58.633"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Title;
