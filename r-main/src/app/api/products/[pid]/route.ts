export async function GET(
  request: Request,
  { params }: { params: { pid: string } }
) {
  const items = await filterData(params.pid);

  if (items.length === 0) {
    return new Response(JSON.stringify({ message: "Not Found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(items));

  async function filterData(item: string) {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      });
      const data = await res.json();
      const results = await data.filter((items: any) => {
        return (
          item &&
          items &&
          items.name &&
          items.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .includes(item.toLowerCase())
        );
      });
      return results;
    } catch (err) {
      throw new Error("Fetch failed");
    }
  }
}
