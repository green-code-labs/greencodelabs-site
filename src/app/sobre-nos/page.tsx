import { Contact } from "@/components/Contact";
import { HeaderMainBackground } from "@/components/HeaderMainBackground";

export default function SobreNos() {
  return (
    <div className="container !p-0 max-w-[1150px]">
      <div className="flex flex-col gap-10">
        <div className=" border border-[#262626] border-t-0 border-b-0 ">
          <HeaderMainBackground title="Sobre a Green Code" />
          <header className="container pt-10 lg:pt-20 pb-10 border-b border-[#262626] flex flex-col gap-2 lg:gap-3 ">
            <h2 className="text-2xl lg:text-3xl font-semibold">
              Sobre a Green Code
            </h2>
            <p className="text-base max-w-[900px]">
              A Green Code é uma Software House dedicada a transformar a maneira
              como as empresas operam no mundo digital. Cada membro do nosso
              time traz uma vasta experiência e conhecimento, garantindo que
              cada projeto seja executado com precisão e criatividade. Se você
              está procurando maximizar sua presença online ou precisa de
              soluções de TI sob medida, a Green Code é a escolha certa.
            </p>
          </header>
          <h4 className="container border-b border-[#262626] py-10 lg:py-12 text-xl lg:text-2xl">
            Nossa timeline
          </h4>
          <ul className="md:flex md:flex-wrap border-b border-[#262626]">
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-r md:w-1/2">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  01
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold ">
                    Programação
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                Era uma vez, em um mundo movido pela tecnologia, um grupo de
                desenvolvedores talentosos se uniu com uma visão compartilhada.
                Eles acreditavam que a programação poderia moldar a maneira como
                as pessoas interagiam com produtos digitais.
              </p>
            </li>
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-r md:w-1/2">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  02
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold">
                    Engenharia
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                Enquanto isso, uma equipe de engenheiros brilhantes estava
                ocupada criando a espinha dorsal da inovação digital. Com sua
                experiência em programação e desenvolvimento, fundaram a divisão
                de engenharia da GreenCode.
              </p>
            </li>
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-r md:w-1/2">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  03
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold">
                    Gestão de Projeto
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                No meio das mentes criativas e técnicas, um grupo de gerentes de
                projeto surgiu como a cola que mantinha tudo unido. Eles
                compreenderam a importância da comunicação eficaz, da
                organização e da execução eficiente.
              </p>
            </li>
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-r md:w-1/2">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  04
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold">
                    Colaboração
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                Na GreenCode, esses três departamentos se uniram para formar uma
                unidade coesa e colaborativa. Eles abraçaram o poder da
                colaboração e reconheceram que a sua experiência combinada
                resultaria em produtos digitais verdadeiramente excepcionais.
              </p>
            </li>
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-b-0 md:border-r md:w-1/2 ">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  05
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold">
                    Centrados no Cliente
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                O sucesso da GreenCode não foi medido apenas pelas suas proezas
                técnicas ou competências de design, mas pelo seu compromisso
                inabalável com os seus clientes. Eles colocaram seus clientes no
                centro de tudo o que faziam. Eles reservaram um tempo para
                ouvir, compreender seus desafios únicos e adaptar seus serviços
                para atender às suas necessidades específicas.
              </p>
            </li>
            <li className="p-6 lg:p-8 flex flex-col gap-5 lg:gap-10 border-b border-[#262626] md:border-b-0 md:border-r md:w-1/2 ">
              <header className="flex items-end gap-4">
                <span className="text-[#D8FF99] text-6xl md:text-8xl lg:text-9xl font-bold">
                  06
                </span>
                <div className="w-full">
                  <p className="text-lg md:text-2xl tracking-[-0.6%] leading-7 text-[#D8FF99] font-semibold">
                    Impulsionando o sucesso
                  </p>
                  <div className="border border-[#262626] w-full mt-2 lg:mt-6" />
                </div>
              </header>
              <p className="text-[#98989A] md:text-lg">
                A cada projeto, a reputação da GreenCode crescia. O seu
                portfólio expandiu-se para incluir uma gama diversificada de
                indústrias e o seu impacto foi sentido em toda a parte. Desde
                startups até empresas estabelecidas, as empresas procuraram a
                GreenCode pela sua experiência na criação de produtos digitais
                que proporcionavam resultados tangíveis.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
