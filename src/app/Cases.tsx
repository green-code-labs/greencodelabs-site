import { HeaderMainBackground } from "@/components/HeaderMainBackground";
import Image from "next/image";
import exampleUserImg from "@/assets/example-user.svg";

export function Cases() {
  return (
    <div>
      <HeaderMainBackground title="O que os clientes dizem sobre nós?" />
      <div>
        {Array(6)
          .fill(undefined)
          .map((_, idx) => (
            <div key={idx}>
              <h4>
                Greencode has been Instrumental in Transforming our Online
                Presence.
              </h4>
              <p>
                Their team's expertise in web development and design resulted in
                a visually stunning and user-friendly e-commerce platform. Our
                online sales have skyrocketed, and we couldn't be happier.
              </p>
              <div>
                <Image src={exampleUserImg} alt="Example user" />
                <div>
                  <h5>John Smith</h5>
                  <span>CEO of Chic Boutique</span>
                </div>
                <button>Open Website</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
