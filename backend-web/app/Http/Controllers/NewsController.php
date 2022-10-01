<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use App\Http\Resources\NewsResource;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$results = News::all()->sortBy('id');
        //return new NewsResource($results);

        $results = News::all()->sortByDesc('pub_date');
        return new NewsResource($results);
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
        $news = new News();
        $news->news_title = $request->news_title;
        $news->news_des = $request->news_des;
        $news->pub_date = $request->pub_date;
        $news->exp_date = $request->exp_date;
        $news->video_link = $request->video_link;
        $news->image_link = $request->image_link;
        $news->created_by = $request->created_by;
        $news->updated_by = $request->updated_by;
        $news->deleted_by = $request->deleted_by;
        $news->status = $request->status;
        $news->created_at = $request->created_at;
        $news->updated_at = $request->updated_at;
        $news->deleted_at = $request->deleted_at;
        if($news->save()){
            return new NewsResource($news);

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news, $id)
    {
        $news = News::findOrFail($id);
        return new NewsResource($news);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, News $news, $id)
    {
        $news = News::findOrFail($id);
        $news->news_title = $request->news_title;
        $news->news_des = $request->news_des;
        $news->pub_date = $request->pub_date;
        $news->exp_date = $request->exp_date;
        $news->video_link = $request->video_link;
        $news->image_link = $request->image_link;
        $news->created_by = $request->created_by;
        $news->updated_by = $request->updated_by;
        $news->deleted_by = $request->deleted_by;
        $news->status = $request->status;
        $news->created_at = $request->created_at;
        $news->updated_at = $request->updated_at;
        $news->deleted_at = $request->deleted_at;
        if($news->save()){
            return new NewsResource($news);
    }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function destroy(News $news, $id)
    {
        $news = News::findOrFail($id);
        if($news->delete()){
            return new NewsResource($news);
        }
    }
}
