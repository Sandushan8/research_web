export default function TechCard(props) {
  return (
    <div
      class="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      style={{
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}>
      <img
        src={props.image}
        alt="Image_here"
        style={{
          height: 150,
        }}
      />
      <div class="p-5">
        <a>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
      </div>
    </div>
  );
}
