<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\StoreEditor;

class HomeController extends Controller
{
    /**
     * Clear css cache.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public static function fileVersion($uri){
        $file = $_SERVER['DOCUMENT_ROOT'].'/'.$uri;
        if (!file_exists($file)) return $file;

        return $uri.'?v='.filemtime ( $file );
    }


    public function save(Request $request)
    {
        $myfile = fopen("text.html", "w") or die("Unable to open file!");
        $txt = $request->get('htmlData');
        $body = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
        <div id="tblCustomers">';
        fwrite($myfile, $body);
        fwrite($myfile, $txt);
        $closeBosy = '<input type="button" id="btnExport" value="Export" /></div>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
                <script type="text/javascript">
                $("body").on("click", "#btnExport", function () {
                    html2canvas($("#tblCustomers")[0], {
                        onrendered: function (canvas) {
                            var data = canvas.toDataURL();
                            var docDefinition = {
                                content: [{
                                    image: data,
                                    width: 500
                                }]
                            };
                            pdfMake.createPdf(docDefinition).download("Table.pdf");
                        }
                    });
                });
            </script></body>
        </html>';
        fwrite($myfile, $closeBosy);
        fclose($myfile);
        // $data = StoreEditor::first();
        // if ($data) {
        //     StoreEditor::where('id', 1)->update([
        //         'editor_data' => $request->get('editor_data')
        //     ]);
        // } else {
        //     StoreEditor::create([
        //         'editor_data' => $request->get('editor_data')
        //     ]);
        // }
        

        return response()->json([
            'success' => true,
        ], 201);
    }

    public function getData()
    {
        $data = StoreEditor::first();
        return response()->json([
            'success' => true,
            'data'    => $data
        ], 200);
    }
}
