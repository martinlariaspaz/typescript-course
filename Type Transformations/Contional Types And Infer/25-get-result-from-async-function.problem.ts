import { Equal, Expect } from "../../helpers/type-utils";

const getServerSideProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json: { title: string } = await data.json();
  return {
    props: {
      json,
    },
  };
};

type GetServerSideProps = typeof getServerSideProps;
type ReturnGetServerSideProps = Awaited<ReturnType<GetServerSideProps>>

// type InferPropsFromServerSideFunction<T extends (...args: any) => any> = Awaited<ReturnType<T>> extends { props: infer TProps } ? TProps : never;
type InferPropsFromServerSideFunction<T> = T extends () => Promise<{ props: infer TProps }> ? TProps : never

type Example = InferPropsFromServerSideFunction<GetServerSideProps>

type tests = [
  Expect<
    Equal<
      InferPropsFromServerSideFunction<GetServerSideProps>,
      { json: { title: string } }
    >
  >
];
