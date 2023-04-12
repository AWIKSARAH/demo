type CounterProps = {
  count: number,
  inc: () => void,
};

const badCode = (count: number) => {
    if (count===2){
        throw new Error('HELLO ERROR BOOM ERROR :smile_cat:')
    }
}

export default function Counter({ count, inc }: CounterProps) {
    badCode(count);



/**
 * TRY AND CATCH  is used to handle errors during runtime NOT ERROR RENDERING 
 */
  const onClick = () => {
    // try {
    //     badCode(count);    

    // } catch (error) {
    //     console.error(error)
        
    // }
    inc();
    
  };
  return (
    <>
      <div> Count: {count}</div>
      <button onClick={onClick}> + </button>
    </>
  );
}
