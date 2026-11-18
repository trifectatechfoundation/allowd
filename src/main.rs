#[tokio::main(flavor = "current_thread")]
async fn main() -> zbus::Result<()> {
    let _connection = zbus::Connection::system().await?;
    println!("Hello, world! I'm on the system bus.");

    Ok(())
}
