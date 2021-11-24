function generatepdf()
{
    const element = document.getElementById('form');

    html2pdf()
    .from(element)
    .save()
}