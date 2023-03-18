import { withTimer } from "@/lib/withTimer";

export function SecondsCounter({ seconds }) {
  const secondsInString = seconds.toString();
  const paddedStart = secondsInString.padStart(6, "0");

  const digits = paddedStart.split("");

  return (
    <div className="row">
      {digits.map((digit, index) => {
        return (
          <div
            key={index}
            className="col text-xl"
            style={{
              paddind: 20,
              border: "solid 1px black",
              backgroundColor: "white",
              fontColor: "white",
              fontWeight: "bolder",
            }}
          >
            <h1>{digit}</h1>
          </div>
        );
      })}
    </div>
  );
}

export const SecondsCounterWithTimer = withTimer(SecondsCounter);
