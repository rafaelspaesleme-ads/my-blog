const nextPage = () => {
    const { page, objectInfo } = this.state;

    if (page === objectInfo.pages) return;

    const pageNumber = page + 1;

    this.loadContact(pageNumber);
}