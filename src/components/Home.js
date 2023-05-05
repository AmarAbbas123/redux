
function Header() {
    const hitme = ()=> {
        console.log("am hit")
    }
  return (
    <>
    <h1>Click on Button</h1>
    <button onClick={hitme}>click me</button>
    </>
  );
}

export default Header;
