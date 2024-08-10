export default {
  "entity": {
    "id": "122dcf75-e0ad-49a3-9c52-bc335828fd4d",
    "name": "毛泽东传（五）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "逄先知",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives8/main/122dcf75-e0ad-49a3-9c52-bc335828fd4d.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东传（五）",
        "authors": [
          "逄先知"
        ],
        "page_start": 1,
        "page_end": 428,
        "dates": []
      }
    ],"ocr": {
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "122dcf75-e0ad-49a3-9c52-bc335828fd4d.pdf",
  "resource_type": "book",
  "version": 2
}