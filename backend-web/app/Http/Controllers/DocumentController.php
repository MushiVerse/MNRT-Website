<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use App\Http\Resources\DocumentResource;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $results = Document::all()->sortBy('id');
        return new DocumentResource($results);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $document = new Document();
        $document->doc_title = $request->doc_title;
        $document->doc_category = $request->doc_category;
        $document->doc_link = $request->doc_link;
        $document->created_by = $request->created_by;
        $document->updated_by = $request->updated_by;
        $document->deleted_by = $request->deleted_by;
        $document->status = $request->status;
        $document->created_at = $request->created_at;
        $document->updated_at = $request->updated_at;
        $document->deleted_at = $request->deleted_at;
        if($document->save()){
            return new DocumentResource($document);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function show(Document $document, $id)
    {
        $document = Document::findOrFail($id);
        return new DocumentResource($document);
    }

    public function acts(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Acts and Policies');
        return new DocumentResource($query);

    }

    public function laws(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Laws and Regulations');
        return new DocumentResource($query);

    }

    public function reportsbudgets(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Reports and Budgets');
        return new DocumentResource($query);

    }

    public function documentform(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Documents and Forms');
        return new DocumentResource($query);

    }

    public function projectprogram(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Projects and Programs');
        return new DocumentResource($query);

    }

    public function otherpublication(Request $request, Document $document)
    {
        $query = Document::all()->where('doc_category', '=', 'Other Publications');
        return new DocumentResource($query);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function edit(Document $document)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Document $document, $id)
    {
        $document = Document::findOrFail($id);
        $document->doc_title = $request->doc_title;
        $document->doc_category = $request->doc_category;
        $document->doc_link = $request->doc_link;
        $document->created_by = $request->created_by;
        $document->updated_by = $request->updated_by;
        $document->deleted_by = $request->deleted_by;
        $document->status = $request->status;
        $document->created_at = $request->created_at;
        $document->updated_at = $request->updated_at;
        $document->deleted_at = $request->deleted_at;
        if($document->save()){
            return new DocumentResource($document);
    }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Document  $document
     * @return \Illuminate\Http\Response
     */
    public function destroy(Document $document, $id)
    {
        $document = Document::findOrFail($id);
        if($document->delete()){
            return new DocumentResource($document);
        }
    }

}
