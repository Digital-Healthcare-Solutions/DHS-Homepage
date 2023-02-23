import { Container, Divider, Timeline, Text } from "@mantine/core"
import React from "react"
import ProductCarousel from "../../components/mantine-Components/productCarousels"

const Features = () => {
    return (
        <div className="mt-12">
            <Container size="lg">
                {/* <h1 className="text-center text-2xl lg:text-4xl pb-10 pt-5 font-bold dark:font-normal">
                    Features
                </h1> */}
                <ProductCarousel />{" "}
                <main className="my-10 text-lg tracking-wide">
                    <section id="1" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Care Plans
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Facere obcaecati labore, odit corrupti quo
                            ipsum quos ipsa commodi saepe harum odio voluptates
                            natus sapiente aperiam minima fugit delectus
                            doloremque accusamus molestiae veniam dolorum
                            assumenda modi ex dolores. Adipisci a deserunt
                            exercitationem, quae quidem nobis iste, minima
                            voluptas, sequi dicta minus.
                        </p>

                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti dolor voluptatum sunt aliquam tempore
                            voluptate repellendus doloribus porro aspernatur
                            velit recusandae facilis, at eos, adipisci
                            voluptatibus, laudantium natus et similique
                            voluptatem aliquid nostrum amet. Officiis fuga
                            dolorem reprehenderit molestiae adipisci libero,
                            voluptatum dicta, quia sapiente sed odit ipsa iste,
                            hic dignissimos deleniti delectus sit labore omnis.
                        </p>
                    </section>
                    <section id="2" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            AI powered dictation <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate ea quis alias reiciendis, ipsa, aut
                            quidem modi pariatur quas laudantium officia
                            aspernatur a. Veniam, sit laboriosam possimus,
                            voluptas quis cupiditate repellendus maiores ut
                            soluta quod explicabo? Aliquid quidem alias eligendi
                            nobis tempore atque ab corporis, quae quos officia
                            sequi quod dicta rem omnis quibusdam autem? Nesciunt
                            ipsa rerum nostrum officiis voluptates itaque, quas
                            dolorem perferendis deleniti natus ratione sunt
                            esse. Voluptatibus aperiam vero ea vel expedita
                            illum ut et optio.
                        </p>
                    </section>
                    <section id="3" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Generate reports automatically{" "}
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti dolor voluptatum sunt aliquam tempore
                            voluptate repellendus doloribus porro aspernatur
                            velit recusandae facilis, at eos, adipisci
                            voluptatibus, laudantium natus et similique
                            voluptatem aliquid nostrum amet. Officiis fuga
                            dolorem reprehenderit molestiae adipisci libero,
                            voluptatum dicta, quia sapiente sed odit ipsa iste,
                            hic dignissimos deleniti delectus sit labore omnis.
                            At odio, voluptates eos placeat repudiandae iusto
                            officia non itaque magnam quos accusantium. Dicta
                            est harum magnam unde, neque quas earum accusamus
                            officia placeat, et culpa, qui nisi corrupti tempora
                            rem nostrum. Magnam, assumenda. Corporis culpa
                            pariatur mollitia quos deleniti perferendis alias?
                            Molestiae, delectus!
                        </p>
                    </section>
                    <section id="4" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Customize your security <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti dolor voluptatum sunt aliquam tempore
                            voluptate repellendus doloribus porro aspernatur
                            velit recusandae facilis, at eos, adipisci
                            voluptatibus, laudantium natus et similique
                            voluptatem aliquid nostrum amet. Officiis fuga
                            dolorem reprehenderit molestiae adipisci libero,
                            voluptatum dicta, quia sapiente sed odit ipsa iste,
                            hic dignissimos deleniti delectus sit labore omnis.
                            At odio, voluptates eos placeat repudiandae iusto
                            officia non itaque magnam quos accusantium. Dicta
                            est harum magnam unde, neque quas earum accusamus
                            officia placeat, et culpa, qui nisi corrupti tempora
                            rem nostrum. Magnam, assumenda. Corporis culpa
                            pariatur mollitia quos deleniti perferendis alias?
                            Molestiae, delectus!
                        </p>
                    </section>
                    <section id="5" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Advanced analytics <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti dolor voluptatum sunt aliquam tempore
                            voluptate repellendus doloribus porro aspernatur
                            velit recusandae facilis, at eos, adipisci
                            voluptatibus, laudantium natus et similique
                            voluptatem aliquid nostrum amet. Officiis fuga
                            dolorem reprehenderit molestiae adipisci libero,
                            voluptatum dicta, quia sapiente sed odit ipsa iste,
                            hic dignissimos deleniti delectus sit labore omnis.
                            At odio, voluptates eos placeat repudiandae iusto
                            officia non itaque magnam quos accusantium. Dicta
                            est harum magnam unde, neque quas earum accusamus
                            officia placeat, et culpa, qui nisi corrupti tempora
                            rem nostrum. Magnam, assumenda. Corporis culpa
                            pariatur mollitia quos deleniti perferendis alias?
                            Molestiae, delectus!
                        </p>
                    </section>
                    <section id="6" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Granular control over staff access{" "}
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Deleniti dolor voluptatum sunt aliquam tempore
                            voluptate repellendus doloribus porro aspernatur
                            velit recusandae facilis, at eos, adipisci
                            voluptatibus, laudantium natus et similique
                            voluptatem aliquid nostrum amet. Officiis fuga
                            dolorem reprehenderit molestiae adipisci libero,
                            voluptatum dicta, quia sapiente sed odit ipsa iste,
                            hic dignissimos deleniti delectus sit labore omnis.
                            At odio, voluptates eos placeat repudiandae iusto
                            officia non itaque magnam quos accusantium. Dicta
                            est harum magnam unde, neque quas earum accusamus
                            officia placeat, et culpa, qui nisi corrupti tempora
                            rem nostrum. Magnam, assumenda. Corporis culpa
                            pariatur mollitia quos deleniti perferendis alias?
                            Molestiae, delectus!
                        </p>
                    </section>
                </main>
            </Container>
        </div>
    )
}

export default Features
