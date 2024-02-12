import avatar from "../assets/images/avatar.jpeg";
import Button from "./Button";

function Card() {
  return (
    <section className="text-white bg-darkgrey w-[min(90%,24rem)] max-sm:px-7 px-10 max-sm:pt-5 pt-10 max-sm:pb-3 pb-8 rounded-xl">
      <img
        className="m-auto mb-8 w-24 aspect-square rounded-full"
        src={avatar}
        alt="profile picture"
        width={96}
        height={96}
      />
      <h2 className="mb-2 font-bold text-2xl text-center">Jessica Randall</h2>
      <h3 className="mb-6 font-semibold text-sm text-green text-center">
        London, United Kingdom
      </h3>
      <blockquote className="mb-6 text-center text-sm font-normal">
        &quot;Front-end developer and avid reader.&quot;
      </blockquote>
      <Button title={"Github"} />
      <Button title={"Frontend Mentor"} />
      <Button title={"LinkedIn"} />
      <Button title={"Twitter"} />
      <Button title={"Instagram"} />
    </section>
  );
}

export default Card;
