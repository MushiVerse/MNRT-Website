<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
            $results = Contact::all()->sortBy('id');
            return new ContactResource($results);    
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
        $contact = new Contact();
        $contact->contact_des = $request->contact_des;
        $contact->category = $request->category;
        $contact->mobile = $request->mobile;
        $contact->email = $request->email;
        $contact->fax = $request->fax;
        $contact->created_by = $request->created_by;
        $contact->updated_by = $request->updated_by;
        $contact->deleted_by = $request->deleted_by;
        $contact->status = $request->status;
        $contact->created_at = $request->created_at;
        $contact->updated_at = $request->updated_at;
        $contact->deleted_at = $request->deleted_at;
        if($contact->save()){
            return new ContactResource($contact);      
    
    }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact, $id)
    {
        $contact = Contact::findOrFail($id);
        return new ContactResource($contact); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact, $id)
    {
        $contact = Contact::findOrFail($id);
        $contact->contact_des = $request->contact_des;
        $contact->category = $request->category;
        $contact->mobile = $request->mobile;
        $contact->email = $request->email;
        $contact->fax = $request->fax;
        $contact->created_by = $request->created_by;
        $contact->updated_by = $request->updated_by;
        $contact->deleted_by = $request->deleted_by;
        $contact->status = $request->status;
        $contact->created_at = $request->created_at;
        $contact->updated_at = $request->updated_at;
        $contact->deleted_at = $request->deleted_at;
        if($contact->save()){
            return new ContactResource($contact);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Contact  $contact
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact, $id)
    {
        $contact = Contact::findOrFail($id);
        if($contact->delete()){
            return new ContactResource($contact);
        }
    }
}
